import React, { useState, useEffect } from "react";
import styled from "styled-components";
import seedRandom from "seedrandom";
import "./styles.css";
import Level1 from "./maps/l1";
import { Wall } from "./sprites/walls";
import { Floor } from "./sprites/floors";
import { Empty, Thing } from "./sprites/misc";

const rng = seedRandom("hey");

function getRandomWallVariant() {
  return Math.floor(rng() * Math.floor(4));
}
function getRandomFloorVariant() {
  return Math.floor(rng() * Math.floor(5));
}

const GridWrap = styled(({ index, className, children }) => {
  return (
    <div className={className} style={{ zIndex: index }}>
      {children}
    </div>
  );
})`
  grid-area: 1/1/1/1;
  position: relative;
  top: 0;
  left: 0;
`;

const Grid = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  display: grid;
  grid-template-columns: repeat(66, 16px);
  grid-auto-rows: 16px;
`;

const Title = styled.h1``;

const MapWrapper = styled.div`
  width: 50vw;
  overflow: scroll;
  display: grid;
  grid-column-template: 1fr;
  position: relative;
`;

const WALL_LAYER = 1;
const OBJECT_LAYER = 2;
const FLOOR_LAYER = 0;

function Map({ level = [] }) {
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    const tmpLayers = [[], [], []];
    level.forEach((row, index) => {
      let wallLayer, floorLayer, objectLayer;
      for (let x = 0; x < row.length; x++) {
        const key = index * 100 + x;
        wallLayer = floorLayer = objectLayer = <Empty key={key} />;
        let tileChar = row.charAt(x);
        switch (tileChar) {
          case "x":
            wallLayer = <Wall key={key} variant={getRandomWallVariant()} />;
            break;
          case "t":
            objectLayer = <Thing key={key} />;
            floorLayer = <Floor key={key} variant={getRandomFloorVariant()} />;
            break;
          default:
            floorLayer = <Floor key={key} variant={getRandomFloorVariant()} />;
            break;
        }
        tmpLayers[WALL_LAYER].push(wallLayer);
        tmpLayers[OBJECT_LAYER].push(objectLayer);
        tmpLayers[FLOOR_LAYER].push(floorLayer);
      }
    });
    setLayers(tmpLayers);
  }, [level]);

  return (
    <>
      {layers.map((layer, index) => {
        return (
          <GridWrap key={index} index={index}>
            <Grid>{layer}</Grid>
          </GridWrap>
        );
      })}
    </>
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
