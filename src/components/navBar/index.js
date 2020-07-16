import React from "react";
import { ListItem, Item } from "./styled";

export const NavBar = (props) => {
  const { data } = props;
  return (
    <ListItem>
      {data &&
        data.map((item, index) => {
          return (
            <Item onClick={item.action} key={index}>
              {item.label}
            </Item>
          );
        })}
    </ListItem>
  );
};
