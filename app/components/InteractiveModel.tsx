'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stage } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model'; // We'll create this next

export default function InteractiveModel() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows>
            <Model />
          </Stage>

          <Environment preset="warehouse" />

          {/* Interactive Controls (like Sketchfab) */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={15}
            autoRotate={true}           // Passive idle rotation
            autoRotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>

      {/* Optional Loading Indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-white/50 text-sm">Loading 3D Model...</div>
      </div>
    </div>
  );
}