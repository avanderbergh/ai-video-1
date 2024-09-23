import { AbsoluteFill, Img, Series, staticFile } from "remotion";
import { z } from "zod";

export const compSchema = z.object({
  title: z.string(),
  scenes: z.array(
    z.object({
      text: z.string(),
      image: z.string(),
    }),
  ),
});

export const MyComposition = (props: z.infer<typeof compSchema>) => {
  return (
    <AbsoluteFill
      style={{
        background: "#000",
        justifyContent: "center",
        alignItems: "center",
        color: "blue",
        fontSize: 60,
      }}
    >
      <Series>
        {props.scenes.map((scene) => {
          return (
            <Series.Sequence
              durationInFrames={30}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Img
                src={staticFile(scene.image)}
                style={{
                  width: "100%",
                }}
              />
              <p>{scene.text}</p>
            </Series.Sequence>
          );
        })}
      </Series>
    </AbsoluteFill>
  );
};
