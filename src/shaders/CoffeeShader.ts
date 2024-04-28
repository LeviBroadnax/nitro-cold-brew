import { Color, Vector2 } from "three";
import CoffeeFragment from "./Coffee.frag";
import CoffeeVertex from "./Coffee.vert";

const coffeeUniforms = {
  uWaveLength: 1.0,
  uSteepness: 1.0,
  uDirection: new Vector2(1.0, 0.5),
  uAlpha: 1.0,
  uMix: 1.0,
  uTime: 0.0,
  uFloor: -0.06,
  uCeiling: 0.01,
  uCoffee: new Color("#422518"),
  uCream: new Color("#fffdd0"),
  uResolution: new Vector2(),
  uFragmentShader: 1,
  uVertexShader: 1
};

export const CoffeeShader = {
  u: coffeeUniforms,
  v: CoffeeVertex,
  f: CoffeeFragment
};
