import { shaderMaterial } from "@react-three/drei";
import { MaterialNode } from "@react-three/fiber";
import { CoffeeShader } from "@shaders";
import { Color, IUniform, ShaderMaterial, Vector2 } from "three";

export const Coffee = shaderMaterial(
  CoffeeShader.u,
  CoffeeShader.v,
  CoffeeShader.f
);

export interface ICoffee extends ShaderMaterial {
  uniforms: ICoffeeUniforms;
}

interface ICoffeeUniforms {
  [uniform: string]: IUniform<number | Color | Vector2>;
  uAlpha: IUniform<number>;
  uMix: IUniform<number>;
  uTime: IUniform<number>;
  uCoffee: IUniform<Color>;
  uCream: IUniform<Color>;
  uResolution: IUniform<Vector2>;
  uWaveLength: IUniform<number>;
  uSteepness: IUniform<number>;
  uDirection: IUniform<Vector2>;
  uFragmentShader: IUniform<number>;
  uVertexShader: IUniform<number>;
}

interface CoffeeElement {
  coffee: MaterialNode<ShaderMaterial, ICoffee>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CoffeeElement {}
  }
}
