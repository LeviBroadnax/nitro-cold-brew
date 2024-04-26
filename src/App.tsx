import React from "react";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";
import { useControls } from "leva";

export default function App() {
  const { width, height } = useWindowSize();
  const boxProps = useControls({ rotation: [0, 0, 0] });
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Stage>
        <mesh {...boxProps}>
          <boxGeometry args={[1, 1, 1]} />
          <meshToonMaterial
            color={"hotpink"}
            transparent={true}
            opacity={0.1}
          />
        </mesh>
        <OrbitControls makeDefault />
      </Stage>
    </Canvas>
  );
}
