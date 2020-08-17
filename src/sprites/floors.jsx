import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faBorderNone,
  faTh,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
library.add(faSquare, faBorderNone, faBlackberry, faTh, faThLarge);

export const Floor = styled(({ className, variant }) => {
  let type = "square";
  console.log(variant);
  const types = [
    ["far", "square"],
    "border-none",
    ["fab", "blackberry"],
    "th",
    "th-large",
  ];
  if (typeof variant === "number") {
    type = types[variant];
  }
  return (
    <div className={className}>
      <FontAwesomeIcon icon={type} />
    </div>
  );
})`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.floor};
  background-color: ${(props) => props.theme.colors.floorBackground};
  & > * {
    filter: blur(0.7px);
    vertical-align: middle;
  }
`;
