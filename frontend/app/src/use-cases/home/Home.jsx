import React from "react";
import AllNews from "../../common/elements/all-news-posts";
import Lunch from "./elements/lunch";
import Sponsor from "./elements/sponsor";
import styled from "styled-components";

const HomeGrid = styled.div`
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 800px 16px 400px;
  grid-template-rows: 400px auto;
`;

const AllNewsCell = styled.div`
  align-items: center;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const LunchCell = styled.div`
  display: flex;
  justify-content: center;

  align-self: flex-start;
  align-items: center;

  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const SponsorsCell = styled.div`
  min-width: 300px;
  width: 400px;

  display: flex;
  flex-direction: column;

  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Home = () => {
  return (
    <HomeGrid>
      <AllNewsCell>
        <AllNews />
      </AllNewsCell>
      <LunchCell>
        <Lunch />
      </LunchCell>
      <SponsorsCell>
        <Sponsor img={"/sponsor_1.png"} main />
        <Sponsor img={"/sponsor_2.jpeg"} />
        <Sponsor img={"/sponsor_3.png"} />
      </SponsorsCell>
    </HomeGrid>
  );
};

export default Home;
