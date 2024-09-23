import { Composition } from "remotion";
import { compSchema, MyComposition } from "./Composition";
import defaultProps from "./data.json"

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        schema={compSchema}
        defaultProps={defaultProps}
      />
    </>
  );
};
