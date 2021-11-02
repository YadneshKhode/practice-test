import React from "react";
import { StyledImage } from "../../styles/StyledImage.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectItem } from "../../redux/display-container/selectedSlice";

export const Widget = ({ object, containerWidth }) => {
  const { assets, imageCount } = object;
  const selectedItems = useSelector((state) => state.select.selectedItems);
  const dispatchSelectedImage = useDispatch(selectItem);
  const widgetWidth = parseInt(containerWidth) / parseInt(imageCount) + "%";

  const isImageSelected = (id, selectedItems) => {
    const index = selectedItems.indexOf(id);
    if (index > -1) {
      return true;
    }
    return false;
  };
  return (
    <>
      {assets.map((image, index) => {
        if (index < imageCount) {
          const select = isImageSelected(image.id, selectedItems);
          return (
            <StyledImage widgetWidth={widgetWidth} select={select}>
              <img
                key={image.id}
                src={`${image.imageUrl}`}
                alt="pics"
                onClick={() => {
                  dispatchSelectedImage(selectItem(image.id));
                }}
              />
            </StyledImage>
          );
        } else return null;
      })}
    </>
  );
};
