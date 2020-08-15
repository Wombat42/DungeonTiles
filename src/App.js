import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faCheck,
  faSquare,
  faAlignJustify,
  faAlignRight,
  faAlignCenter,
  faAlignLeft
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import Level1 from "./maps/l1";

library.add(
  faCheckSquare,
  faCoffee,
  faCheck,
  faSquare,
  faAlignJustify,
  faAlignRight,
  faAlignCenter,
  faAlignLeft
);

const Grid = styled.div`
  background-color: rgb(88, 88, 88);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(66, 16px);
`;

const Title = styled.h1``;

const Shadow = styled.div`
  background-color: rgb(88, 88, 88);
  color: rgb(67, 66, 66);
  filter: drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 0px rgba(88, 88, 88, 90%))
    drop-shadow(1px 1px 3px rgba(66, 66, 66, 90%));
`;

const Space = styled.div`
  background-color: rgb(78, 78, 78);
`;

const MapWrapper = styled.div`
  overflow: scroll;
`;

function Wall({ variant }) {
  let type = "align-justify";
  switch (variant) {
    case "left":
      type = "align-right";
      break;
    case "right":
      type = "align-left";
      break;
    case "center":
      type = "align-center";
      break;
    default:
      type = "align-justify";
  }
  return (
    <Shadow>
      <FontAwesomeIcon icon={type} />
    </Shadow>
  );
}

function Map({ level = [] }) {
  return (
    <Grid>
      {level.map((row) => {
        const tiles = [];
        const len = row.length;
        console.log("length", len);
        for (let x = 0; x < len; x++) {
          let tileChar = row.charAt(x);
          switch (tileChar) {
            case "x":
              tiles.push(<Wall />);
              break;
            default:
              tiles.push(<Space />);
          }
        }
        return tiles;
      })}
    </Grid>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Making D&D Tiles with FontAwesome</Title>
      <MapWrapper>
        <Map level={Level1} />
      </MapWrapper>
    </div>
  );
}
