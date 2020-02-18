import React from "react";
import {
  DigitHeader,
  DigitLayout,
  DigitButtonGroup,
  DigitList
} from "@cthit/react-digit-components";
import styled from "styled-components";
import GroupIcon from "@material-ui/icons/Group";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import HealingIcon from "@material-ui/icons/Healing";
import { useHistory } from "react-router";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import News from "../use-cases/news";
import Home from "../use-cases/home";

const TitleText = styled.h1`
  font-family: "Roboto", serif;
  font-size: 2rem;
  font-weight: 400;
`;

const SubtitleText = styled.h2`
  font-family: "Roboto", serif;
  font-size: 1rem;
  margin: 0;
`;

const ITLogo = styled.img`
  height: 70px;
`;

const Title = () => {
  return (
    <DigitLayout.Row fillElement>
      <ITLogo src={"/itlogo.svg"} alt={"IT logo"} />
      <DigitLayout.Column>
        <TitleText>Informationsteknik</TitleText>
        <SubtitleText>Chalmers studentkår</SubtitleText>
      </DigitLayout.Column>
    </DigitLayout.Row>
  );
};

const ActionBar = () => {
  return (
    <DigitLayout.Center>
      <DigitButtonGroup
        outlined
        small
        buttons={[
          { text: "Schema", startIcon: <ScheduleIcon /> },
          { text: "Grupprum", startIcon: <GroupIcon /> },
          { text: "Kårkort", startIcon: <CreditCardIcon /> },
          { text: "Skriv ut", startIcon: <LocalPrintshopIcon /> },
          { text: "BookIT", startIcon: <HomeIcon /> },
          { text: "Slack", startIcon: <ChatIcon /> },
          { text: "Studiehälsa", startIcon: <HealingIcon /> }
        ]}
      />
    </DigitLayout.Center>
  );
};

const committeesSubItems = [
  {
    text: "P.R.I.T."
  },
  {
    text: "digIT"
  },
  { text: "frITid" }
];

const associationsSubItems = [
  {
    text: "DrawIT"
  },
  {
    text: "laggIT"
  },
  {
    text: "FikIT"
  }
];

const divisionSubItems = [
  {
    text: "Kommitteer",
    items: committeesSubItems,
    link: "/division/committees"
  },
  {
    text: "Föreningar",
    items: associationsSubItems,
    link: "/division/associations"
  },
  {
    text: "Andra instanser",
    link: "/division/other"
  }
];

const documentSubItems = [
  { text: "Styrelsemötesprotokoll" },
  { text: "Studienämndens protokoll" },
  { text: "Sektionsmötesprotokoll" }
];

const Drawer = ({ closeDrawer }) => {
  const history = useHistory();

  return (
    <DigitList
      multipleExpanded
      onClick={item => {
        history.push(item.link);
        closeDrawer();
      }}
      items={[
        { text: "Sektionen", link: "/division", items: divisionSubItems },
        { text: "Dokument", link: "/documents", items: documentSubItems },
        { text: "För företag", link: "/companies" },
        { text: "Programledningen", link: "/pl" }
      ]}
    />
  );
};

const Main = () => {
  return (
    <Switch>
      <Route exact path={"/news"} component={News} />
      <Route exact path={"/"} component={Home} />
    </Switch>
  );
};

const App = () => {
  return (
    <DigitHeader
      headerHeight="90px"
      renderTitle={() => <Title />}
      renderHeader={() => <ActionBar />}
      renderDrawer={closeDrawer => <Drawer closeDrawer={closeDrawer} />}
      renderMain={() => <Main />}
    />
  );
};

export default App;
