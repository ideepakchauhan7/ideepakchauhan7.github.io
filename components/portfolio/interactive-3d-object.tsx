"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Interactive3DObjectProps {
  accentColor?: string;
  className?: string;
}

export function Interactive3DObject({
  accentColor = "#c6ff3d",
  className,
}: Interactive3DObjectProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 480;
    let height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const color = new THREE.Color(accentColor);

    const outerGeometry = new THREE.IcosahedronGeometry(1.55, 1);
    const wireGeometry = new THREE.WireframeGeometry(outerGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.55 });
    const wireMesh = new THREE.LineSegments(wireGeometry, lineMaterial);
    scene.add(wireMesh);

    const pointsMaterial = new THREE.PointsMaterial({ color, size: 0.05, transparent: true, opacity: 0.9 });
    const points = new THREE.Points(outerGeometry, pointsMaterial);
    scene.add(points);

    const coreGeometry = new THREE.IcosahedronGeometry(0.6, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.22 });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    let rotX = 0.4;
    let rotY = 0.6;
    let velX = 0;
    let velY = 0.12;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frameId = 0;
    let destroyed = false;

    function onPointerDown(event: PointerEvent) {
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      container!.style.cursor = "grabbing";
    }
    function onPointerMove(event: PointerEvent) {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      velY = dx * 0.006;
      velX = dy * 0.006;
      rotY += velY;
      rotX += velX;
    }
    function onPointerUp() {
      dragging = false;
      if (container) container.style.cursor = "grab";
    }

    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    function animate() {
      if (destroyed) return;
      if (!dragging) {
        velX *= 0.95;
        velY *= 0.95;
        rotY += velY + 0.0035;
        rotX += velX;
      }
      wireMesh.rotation.set(rotX, rotY, 0);
      points.rotation.set(rotX, rotY, 0);
      core.rotation.set(-rotX * 0.6, -rotY * 0.6, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointerdown", onPointerDown);
      outerGeometry.dispose();
      wireGeometry.dispose();
      coreGeometry.dispose();
      lineMaterial.dispose();
      pointsMaterial.dispose();
      coreMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [accentColor]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", width: "100%", height: "100%", cursor: "grab", touchAction: "none" }}
      aria-label="Interactive 3D wireframe object, drag to rotate"
      role="img"
    />
  );
}
