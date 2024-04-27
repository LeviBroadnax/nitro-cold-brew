import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

import frag from "./Coffee.frag";
import vert from "./Coffee.vert";

export const CoffeeShader = shaderMaterial(
  {
    uTime: 0,
    uColor1: new Color("#f4a460"),
    uColor2: new Color("#8b4513"),
  },
  vert,
  frag
);
