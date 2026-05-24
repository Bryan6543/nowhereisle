'use client';

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

export default function Model() {
  const groupRef = useRef<Group>(null!);

  // Replace with your model path
  const { scene } = useGLTF('/models/Character.glb');

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={1.8} 
        position={[0, 0, 0]} 
      />
    </group>
  );
}

// Preload the model (optional but recommended)
useGLTF.preload('/models/Character.glb');