import { shaderMaterial } from "@react-three/drei";
import { MaterialNode } from "@react-three/fiber";
import { CoffeeShader } from "@shaders";
import { Color, IUniform, ShaderMaterial } from "three";

export const Coffee = shaderMaterial(
  CoffeeShader.u,
  CoffeeShader.v,
  CoffeeShader.f
);

export interface ICoffee extends ShaderMaterial {
  uniforms: ICoffeeUniforms;
}

interface ICoffeeUniforms {
  [uniform: string]: IUniform<number | Color>;
  uAlpha: IUniform<number>;
  uMix: IUniform<number>;
  uTime: IUniform<number>;
  uCoffee: IUniform<Color>;
  uCream: IUniform<Color>;
}

interface CoffeeElement {
  coffee: MaterialNode<ShaderMaterial, ICoffee>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CoffeeElement {}
  }
}
