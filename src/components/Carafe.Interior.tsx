import { Coffee, Glass, ICoffee } from "@materials";
import { extend, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef, useState } from "react";
import { Color, ColorRepresentation } from "three";

extend({ Coffee });
export function CarafeInterior({ carafeNodes }) {
  const [scale, setScale] = useState(0.98);
  const interiorGeometry = carafeNodes.clone();
  interiorGeometry.scale(...new Array(3).fill(scale));
  const coffeeRef = useRef<ICoffee>();

  const onColorChange = (key: string, value: ColorRepresentation) =>
    (coffeeRef.current.uniforms[key].value = new Color(value));
  const onValueChange = (key: string, value: any) =>
    (coffeeRef.current.uniforms[key].value = value);

  useControls("Coffee", {
    "Coffee": {
      value: "#422518",
      onChange: value => onColorChange("uCoffee", value)
    },
    "Cream": {
      value: "#fffdd0",
      onChange: value => onColorChange("uCream", value)
    },
    "mix": {
      value: 1.0,
      onChange: value => onValueChange("uMix", value)
    },
    "alpha": {
      value: 1.0,
      onChange: value => onValueChange("uAlpha", value)
    },
    "interior scale": {
      value: scale,
      onChange: setScale,
      step: 0.005
    }
  });

  useFrame((_state, delta) => {
    coffeeRef.current.uniforms.uTime.value += delta;
  });

  return (
    <group name="Glass">
      <mesh geometry={carafeNodes}>
        <Glass />
      </mesh>
      <mesh name="Coffee" geometry={interiorGeometry}>
        <coffee ref={coffeeRef} />
      </mesh>
    </group>
  );
}
