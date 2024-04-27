import React from "react";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";
import { useControls } from "leva";
import { Carafe } from "./components/Carafe";

export default function App() {
  const { width, height } = useWindowSize();
  const carafeProps = useControls({
    rotation: [0, 0, 0],
    transparent: true,
    opacity: 0.3,
  });
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Stage>
        <Carafe {...carafeProps} />
        <OrbitControls makeDefault />
      </Stage>
    </Canvas>
  );
}
