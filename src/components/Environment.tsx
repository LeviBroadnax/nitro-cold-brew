import { OrbitControls, Sky, Stage } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

export function Environment({ children }) {
  const config = useConfig(e => e.Environment);
  const skyProps = useControls("Sky", config.Sky, {
    collapsed: config.Collapsed
  });
  const stageProps = useControls(
    "Stage",
    extend(true, config.Stage, {
      preset: {
        options: ["rembrandt", "portrait", "upfront", "soft"]
      },
      shadows: {
        options: [false, true, "contact", "accumulative"]
      },
      environment: {
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
      }
    }),
    {
      collapsed: config.Collapsed
    }
  );
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
