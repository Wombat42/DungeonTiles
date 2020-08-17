import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCoffee);

export const Empty = styled(({ className }) => {
  return <div className={className}>{""}</div>;
})`
  width: 16px;
  opacity: 0;
`;

export const Thing = styled(({ className }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
})`
  font-size: 0.65rem;
  color: white;
  & > * {
    vertical-align: middle;
  }
`;
