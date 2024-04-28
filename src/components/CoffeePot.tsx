import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { VesselInterior } from "./VesselInterior";

const config = {
  "model": "coffeePot.glb",
  "4k": "/coffeePot/4k",
  "quality": "4k"
};

export function CoffeePot(props) {
  const coffeePot = useConfig(e => e.CoffeePot);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const coffeeProps = useControls(
    "Coffee Pot",
    extend(true, coffeePot, {
      rotation: {
        step: Math.PI / 32,
        min: -2 * Math.PI,
        max: 2 * Math.PI
      }
    }),
    { collapsed: coffeePot.Collapsed }
  );
  return (
    <group {...{ ...props, ...coffeeProps }} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps.Glass}
          geometry={nodes.glass_1.geometry}
          material={materials.glass_1001}
        />
        <VesselInterior nodes={nodes.glass_1.geometry} />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps.Rim}
          geometry={nodes.chromeRim_1.geometry}
          material={materials.chrome_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps.Lid}
          geometry={nodes.lidTop_1.geometry}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps.LidHandle}
          geometry={nodes.lidHandle_1.geometry}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps.Clip}
          geometry={nodes.clip_1.geometry}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps.Handle}
          geometry={nodes.handle_1.geometry}
          material={materials.plastic_1001}
        />
      </group>
    </group>
  );
}
