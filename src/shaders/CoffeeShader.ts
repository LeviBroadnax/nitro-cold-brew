import { Color } from "three";
import CoffeeFragment from "./Coffee.frag";
import CoffeeVertex from "./Coffee.vert";

const coffeeUniforms = {
  uAlpha: 1.0,
  uMix: 1.0,
  uTime: 0.0,
  uCoffee: new Color("#422518"),
  uCream: new Color("#fffdd0")
};

export const CoffeeShader = {
  u: coffeeUniforms,
  v: CoffeeVertex,
  f: CoffeeFragment
};
