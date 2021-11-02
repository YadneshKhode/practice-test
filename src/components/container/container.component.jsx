import React from "react";
import { StyledWidget } from "../widget/StyledWidget.styled";
import { Widget } from "../widget/widget.component";
import { StyledContainer } from "./StyledContainer";

export const Container = ({ object }) => {
  const { grow } = object;
  if (object.slotType === "WIDGET") {
    return (
      <StyledWidget grow={grow}>
        <Widget object={object} containerWidth={grow}/>
      </StyledWidget>
    );
  } else {
    return (
      <StyledContainer grow={grow}>
        {object.children.map((object, index) => {
          //never provide index as key could have used Random function / Date Time to generate id but it is expensive and creates unstable keys
          return <Container object={object} key={index} />;
        })}
      </StyledContainer>
    );
  }
};
