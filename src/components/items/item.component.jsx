import React from "react";
import { getContainers } from "../../utilities/getData";
import { useSelector } from "react-redux";
import { Container } from "../container/container.component";

export const Items = () => {
  const pincode = useSelector((state) => state.serve.pincode);
  let data = useSelector((state) => state.display.data);

  data = getContainers(pincode, data);

  return (
    <div className="FirstOutermost">
      {data.map((object,index) => {
        return <Container object={object} key={index}/>;
      })}
    </div>
  );
};
