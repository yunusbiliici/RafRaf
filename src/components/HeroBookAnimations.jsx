import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

function RotatingBook() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
      mesh.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <mesh ref={mesh} scale={[1.5, 2, 0.3]}>
      <boxGeometry args={[1, 1.5, 0.1]} />
      <MeshWobbleMaterial color="#6b46c1" speed={2} factor={0.3} />
    </mesh>
  );
}

export default function HeroBookAnimation() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <RotatingBook />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
