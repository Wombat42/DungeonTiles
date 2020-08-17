import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAlignJustify,
  faAlignRight,
  faAlignCenter,
  faAlignLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAlignJustify, faAlignRight, faAlignCenter, faAlignLeft);

const Shadow = styled.div`
  //z-index: 10;
  & > * {
    //z-index: 10;
  }
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.wall};
  filter: ${(props) => {
    const shadows = [];
    const max = 6;
    for (let x = 0; x < max; x++) {
      const sh = `drop-shadow( 1px 1px ${x + 1 === max ? 1 : 0.25}px ${
        props.theme.colors.backgroundShadow
      })`;
      shadows.push(sh);
    }
    return shadows.join(" ") + ";";
  }};
`;

export function Wall({ variant }) {
  let type = "align-justify";
  const types = ["align-right", "align-left", "align-center", "align-justify"];
  if (typeof variant === "number") {
    type = types[variant];
  }
  return (
    <>
      <Shadow>
        <FontAwesomeIcon icon={type} />
      </Shadow>
    </>
  );
}
