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

const TilePrim = styled.div`
  background-color: rgb(88, 88, 88);
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(5, 16px);
  width: 80px;
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

function TileA() {
  return (
    <TilePrim>
      <Wall variant="left" />
      <Wall />
      <Wall />
      <Wall />
      <Wall variant="right" />

      <Wall variant="center" />
      <Space />
      <Space />
      <Space />
      <Wall variant="center" />
      <Wall />
      <Space />
      <Space />
      <Space />
      <Wall />
      <Wall variant="center" />
      <Space />
      <Space />
      <Space />
      <Wall variant="center" />

      <Wall variant="right" />
      <Space />
      <Space />
      <Space />
      <Wall variant="left" />
    </TilePrim>
  );
}
function TileB() {
  return (
    <TilePrim>
      <Wall variant="left" />
      <Space />
      <Space />
      <Space />
      <Wall variant="right" />

      <Wall variant="center" />
      <Space />
      <Space />
      <Space />
      <Wall variant="center" />
      <Wall />
      <Space />
      <Space />
      <Space />
      <Wall />
      <Wall variant="center" />
      <Space />
      <Space />
      <Space />
      <Wall variant="center" />

      <Wall variant="right" />
      <Wall />
      <Wall />
      <Wall />
      <Wall variant="left" />
    </TilePrim>
  );
}
function TileEmpty() {
  return (
    <TilePrim>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
    </TilePrim>
  );
}

function Tile({ variant }) {
  let tile;
  switch (variant) {
    case "A":
      tile = <TileA />;
      break;
    case "B":
      tile = <TileB />;
      break;
    default:
      tile = <TileEmpty />;
      break;
  }
  return tile;
}

export default function App() {
  return (
    <div className="App">
      <Title>Making D&D Tiles with FontAwesome</Title>
      <Tile variant="A" />
      <Tile />
      <Tile variant="B" />
    </div>
  );
}
