import React from "react";

import { MeshPhysicalMaterialProps } from "@react-three/fiber";
import { useControls } from "leva";

export default function GlassMaterial() {
  const props: MeshPhysicalMaterialProps = useControls(
    "Glass",
    {
      transparent: true,
      opacity: 0.25,
      reflectivity: 0.1,
      transmission: 1.2,
      roughness: 0,
      metalness: 0.11,
      clearcoat: 0.55,
      clearcoatRoughness: 0.25,
      ior: 1.2,
      thickness: 30,
    },
    { collapsed: true }
  );
  return <meshPhysicalMaterial {...props} />;
}
