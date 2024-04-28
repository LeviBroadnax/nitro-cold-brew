import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { VesselInterior } from "./VesselInterior";

const config = {
  "model": "coffeePot.glb",
  "4k": "/coffeePot/4k",
  "quality": "4k"
};

export function CoffeePot(props) {
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const coffeeProps = useControls("Coffee Pot", {
    "rotation": {
      value: [0, 0, 0],
      step: Math.PI / 32,
      min: -2 * Math.PI,
      max: 2 * Math.PI
    },
    "Show Glass": true,
    "Show Rim": true,
    "Show Lid": true,
    "Show LidHandle": true,
    "Show Clip": true,
    "Show Handle": true
  });
  return (
    <group {...{ ...props, ...coffeeProps }} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Show Glass"]}
          geometry={nodes.glass_1.geometry}
          material={materials.glass_1001}
        />
        <VesselInterior nodes={nodes.glass_1.geometry} />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Show Rim"]}
          geometry={nodes.chromeRim_1.geometry}
          material={materials.chrome_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Show Lid"]}
          geometry={nodes.lidTop_1.geometry}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Show LidHandle"]}
          geometry={nodes.lidHandle_1.geometry}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Show Clip"]}
          geometry={nodes.clip_1.geometry}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Show Handle"]}
          geometry={nodes.handle_1.geometry}
          material={materials.plastic_1001}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${config[config.quality]}/${config.model}`);
