// app/components/game/CharacterModel.tsx
"use client";

import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Group } from "three";

export default function CharacterModel({ modelPath }: { modelPath: string }) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (!groupRef.current) return;

    const group = groupRef.current;
    group.scale.set(3, 3, 3);       
    group.position.set(0, -1.8, 0);        
  }, [scene]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} dispose={null} />

      <ambientLight intensity={0.7} />
      <pointLight position={[6, 12, 6]} intensity={2.8} color="#ffffff" />
      <pointLight position={[-6, 8, -6]} intensity={2} color="#ffaaaa" />
      
    </group>
  );
}

useGLTF.preload("/models/CesiumMan.glb");
useGLTF.preload("/models/Duck.glb");


{/* Better lighting setup */}
      // <ambientLight intensity={0.6} />
      // <pointLight position={[10, 15, 10]} intensity={2.5} color="#ffffff" />
      // <pointLight position={[-10, 10, -8]} intensity={1.8} color="#ffccaa" />
      // <directionalLight
      //   position={[5, 10, 5]}
      //   intensity={1.2}
      //   castShadow
      //   shadow-mapSize-width={2048}
      //   shadow-mapSize-height={2048}
      // />