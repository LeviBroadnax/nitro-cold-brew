import { OrbitControls, Sky, Stage } from "@react-three/drei";
import { useControls } from "leva";
import { Vector3 } from "three";

export function Environment({ children }) {
  const skyProps = useControls(
    "Sky",
    {
      distance: 0,
      sunPosition: new Vector3(0, 0, 0),
      inclination: 0,
      azimuth: 0,
      mieCoefficient: 0,
      mieDirectionalG: 0,
      rayleigh: 0,
      turbidity: 0
    },
    { collapsed: true }
  );

  const stageProps = useControls("Stage", {
    preset: {
      value: "upfront",
      options: ["rembrandt", "portrait", "upfront", "soft"]
    },
    environment: {
      value: false,
      options: [
        false,
        "studio",
        "apartment",
        "city",
        "dawn",
        "forest",
        "lobby",
        "night",
        "park",
        "sunset",
        "warehouse"
      ]
    },
    shadows: {
      value: "contact",
      options: [false, true, "contact", "accumulative"]
    },
    adjustCamera: {
      value: 1.75
    },
    intensity: 1
  });
  return (
    <>
      <Sky {...skyProps} />
      <Stage {...stageProps}>
        {children}
        <OrbitControls makeDefault />
      </Stage>
    </>
  );
}
