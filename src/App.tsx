import { Carafe } from "@components";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <Stage>
        <Carafe />
        <OrbitControls makeDefault />
      </Stage>
    </Canvas>
  );
}
