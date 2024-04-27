import { MeshPhysicalMaterialProps } from "@react-three/fiber";
import { useControls } from "leva";

export function PlasticMaterial() {
  const props: MeshPhysicalMaterialProps = useControls(
    "Plastic",
    {
      color: "black",
      transmission: 1.2,
      roughness: 1,
      metalness: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.15
    },
    { collapsed: true }
  );
  return <meshPhysicalMaterial {...props} />;
}
