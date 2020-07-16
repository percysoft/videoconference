import React, { useState } from "react";
import { NavBar } from "../../components/navBar";
import { DetailNavBar } from "../../components/detailNavBar";
import { Container } from "./styled";
import { Item1, Item2, Item3, Item4, Item5 } from "./DetailItems/Items";

export const Dashboard = () => {
  const [activeDetail, setActiveDetail] = useState(null);
  const Menu = [
    {
      index: 0,
      label: "Menu 1",
      action: () => {
        activeDetail !== 0 ? setActiveDetail(0) : setActiveDetail(null);
      },
    },
    {
      index: 1,
      label: "Menu 2",
      action: () => {
        activeDetail !== 1 ? setActiveDetail(1) : setActiveDetail(null);
      },
    },
    {
      index: 2,
      label: "Menu 3",
      action: () => {
        activeDetail !== 2 ? setActiveDetail(2) : setActiveDetail(null);
      },
    },
    {
      index: 3,
      label: "Menu 4",
      action: () => {
        activeDetail !== 3 ? setActiveDetail(3) : setActiveDetail(null);
      },
    },
    {
      index: 4,
      label: "Menu 5",
      action: () => {
        activeDetail !== 4 ? setActiveDetail(4) : setActiveDetail(null);
      },
    },
  ];
  const renderDetail = (index) => {
    switch (index) {
      case 0:
        return <Item1 />;
        break;
      case 1:
        return <Item2 />;
        break;
      case 2:
        return <Item3 />;
        break;
      case 3:
        return <Item4 />;
        break;
      case 4:
        return <Item5 />;
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <NavBar data={Menu} />
      {activeDetail !== null && <DetailNavBar>{renderDetail(activeDetail)}</DetailNavBar>}
    </Container>
  );
};
