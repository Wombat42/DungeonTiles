import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import seedRandom from "seedrandom";
import {
  faCheckSquare,
  faCoffee,
  faCheck,
  faSquare,
  faAlignJustify,
  faAlignRight,
  faAlignCenter,
  faAlignLeft,
} from "@fortawesome/free-solid-svg-icons";

import { faSquare as farSquare } from "@fortawesome/free-regular-svg-icons";
import "./styles.css";
import Level1 from "./maps/l1";
const rng = seedRandom("hey");

function getRandomWallVariant() {
  return Math.floor(rng() * Math.floor(4));
}

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
  background-color: ${(props) => props.theme.colors.floorBackground};
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(66, 16px);
  transform: scale(2);
`;

const Title = styled.h1``;
const Shadow = styled.div`
  z-index: 10;
  & > * {
    z-index: 10;
  }
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.wall};
  filter: ${(props) => {
    const shadows = [];
    for (let x = 0; x < 6; x++) {
      const sh = `drop-shadow( 1px 1px 0px ${props.theme.colors.backgroundShadow})`;
      shadows.push(sh);
    }
    return shadows.join(" ") + ";";
  }};
`;

const MapWrapper = styled.div`
  overflow: scroll;
`;

const Floor = styled(({ className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={farSquare} />
    </div>
  );
})`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.floor};
  background-color: ${(props) => props.theme.colors.floorBackground};
  & > * {
    z-index: 1;
    //filter: blur(1px);
    vertical-align: middle;
  }
`;

function Wall({ variant }) {
  let type = "align-justify";
  const types = ["align-right", "align-left", "align-center", "align-justify"];
  if (typeof variant === "number") {
    type = types[variant];
  }
  return (
    <div>
      <Shadow>
        <FontAwesomeIcon icon={type} />
      </Shadow>
    </div>
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
              tiles.push(<Wall key={x} variant={getRandomWallVariant()} />);
              break;
            default:
              tiles.push(<Floor key={x} />);
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
