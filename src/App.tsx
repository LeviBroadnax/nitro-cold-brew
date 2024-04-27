import React from "react";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";
import { useControls } from "leva";
import { Carafe } from "./components/Carafe";

export default function App() {
  const { width, height } = useWindowSize();
  const carafeProps = useControls("Carafe", {
    rotation: {
      value: [0, 0, 0],
      step: Math.PI / 32,
      min: -2 * Math.PI,
      max: 2 * Math.PI,
    },
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
