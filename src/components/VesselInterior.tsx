import { Coffee, ICoffee } from "@materials";
import { extend, useFrame } from "@react-three/fiber";
import { useConfig } from "@store";
import merge from "just-extend";
import { useControls } from "leva";
import { useRef, useState } from "react";
import { Color, ColorRepresentation } from "three";

extend({ Coffee });
export function VesselInterior({ nodes, name = "Coffee" }) {
  const vessel = useConfig(e => e.Vessel);
  const coffeeRef = useRef<ICoffee>();

  const [scale, setScale] = useState(vessel.Scale.value);
  const interiorGeometry = nodes.clone();
  interiorGeometry.scale(...new Array(3).fill(scale));

  const onColorChange = (key: string) => (value: ColorRepresentation) =>
    (coffeeRef.current.uniforms[key].value = new Color(value));

  const onValueChange = (key: string) => (value: any) =>
    (coffeeRef.current.uniforms[key].value = value);

  useControls(
    name,
    merge(true, vessel, {
      Floor: {
        onChange: onValueChange("uFloor")
      },
      Ceiling: {
        onChange: onValueChange("uCeiling")
      },
      Coffee: {
        onChange: onColorChange("uCoffee")
      },
      Cream: {
        onChange: onColorChange("uCream")
      },
      Mix: {
        onChange: onValueChange("uMix")
      },
      Alpha: {
        onChange: onValueChange("uAlpha")
      },
      Scale: {
        onChange: setScale
      }
    })
  );

  useFrame((_state, delta) => {
    coffeeRef.current.uniforms.uTime.value += delta;
  });

  return (
    <mesh name="Coffee" geometry={interiorGeometry}>
      <coffee ref={coffeeRef} />
    </mesh>
  );
}
