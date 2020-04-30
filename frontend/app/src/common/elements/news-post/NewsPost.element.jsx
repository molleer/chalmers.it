import React from "react";
import {
  DigitButton,
  DigitDesign,
  DigitText,
} from "@cthit/react-digit-components";
import styled from "styled-components";

const NewsPostImg = styled(DigitDesign.CardHeaderImage)`
  object-fit: contain;

  height: 100%;
  max-height: 400px;
`;

const NewsPost = ({ title, text, img }) => {
  return (
    <DigitDesign.Card>
      <DigitDesign.CardHeader hasSubTitle>
        <DigitDesign.CardTitle text={title} />
      </DigitDesign.CardHeader>
      <NewsPostImg src={img} />
      <DigitDesign.CardBody>
        <DigitText.Subtitle
          text={"Skrivet av LP för frITid för 5 dagar sedan"}
        />
        <DigitText.Text text={text} />
      </DigitDesign.CardBody>
      <DigitDesign.CardButtons reverseDirection>
        <DigitButton text={"Läs mer"} raised primary />
      </DigitDesign.CardButtons>
    </DigitDesign.Card>
  );
};

export default NewsPost;
