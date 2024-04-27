import { Plastic } from "@materials";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { CarafeInterior } from "./Carafe.Interior";

export function Carafe() {
  const { nodes } = useGLTF("/Coffe.glb");
  const carafe = useControls(
    "Carafe",
    {
      rotation: {
        value: [0, 0, 0],
        step: Math.PI / 32,
        min: -2 * Math.PI,
        max: 2 * Math.PI
      }
    },
    { collapsed: true }
  );

  return (
    <group {...carafe} dispose={null}>
      <CarafeInterior carafeNodes={nodes.Cylinder002["geometry"]} />
      <group name="Plastic">
        <mesh geometry={nodes.Cylinder004["geometry"]}>
          <Plastic />
        </mesh>
        <mesh
          geometry={nodes.Cylinder005["geometry"]}
          position={[0, 0.573, 0]}
          scale={1.009}>
          <Plastic />
        </mesh>
        <mesh
          geometry={nodes.Sphere["geometry"]}
          position={[0, 0.53, 0]}
          scale={[0.286, 0.192, 0.286]}>
          <Plastic />
        </mesh>
        <mesh
          geometry={nodes.Cylinder["geometry"]}
          position={[0.496, 0.63, 0]}
          rotation={[0, 0, 0.094]}
          scale={[0.189, 0.044, 0.189]}>
          <Plastic />
        </mesh>
        <mesh geometry={nodes.Cylinder009["geometry"]}>
          <Plastic />
        </mesh>
        <mesh geometry={nodes.BezierCurve001["geometry"]}>
          <Plastic />
        </mesh>
      </group>
    </group>
  );
}
