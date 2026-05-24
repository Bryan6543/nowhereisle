"use client";

import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="text-green-400 font-mono text-xs">
        Loading 3D Assets... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}