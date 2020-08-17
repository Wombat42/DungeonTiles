import { lighten, darken } from "polished";

const baseWallColor = "#401E01";
const baseFloorColor = "#404040";

const Theme = {
  colors: {
    background: lighten(0.2, baseWallColor),
    backgroundShadow: lighten(0.1, baseWallColor),
    wall: baseWallColor,
    floor: baseFloorColor,
    floorBackground: lighten(0.1, baseFloorColor),
  },
};

export default Theme;
