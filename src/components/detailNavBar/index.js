import React from "react";
import { ContainerDetailNavBar } from "./styled";

export const DetailNavBar = (props) => {
  const { children } = props;
  return <ContainerDetailNavBar>{children}</ContainerDetailNavBar>;
};
