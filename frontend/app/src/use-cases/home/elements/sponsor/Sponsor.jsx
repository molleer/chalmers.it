import React from "react";
import { DigitDesign } from "@cthit/react-digit-components";
import styled from "styled-components";

const SponsorImage = styled(DigitDesign.CardHeaderImage)`
  object-fit: contain;
`;

const Sponsor = ({ img, main }) => {
  return (
    <div style={{ marginBottom: "16px", width: "100%" }}>
      <DigitDesign.Card absHeight={"250px"}>
        <DigitDesign.CardHeader>
          <DigitDesign.CardTitle
            text={main ? "Huvudpartner" : "Samarbetspartner"}
          />
          <SponsorImage src={img} />
        </DigitDesign.CardHeader>
        <DigitDesign.CardBody></DigitDesign.CardBody>
      </DigitDesign.Card>
    </div>
  );
};

export default Sponsor;
