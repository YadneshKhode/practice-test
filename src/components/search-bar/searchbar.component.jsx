import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPincode } from "../../redux/display-container/pincodeSlice";
import { apiURL } from "../../apis/data";
import { setData } from "../../redux/display-container/dataSlice";

export const SearchBar = () => {
  const persistedData = useSelector((state) => state.display.data);
  const dispatchData = useDispatch(setData);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiURL);
      const data = await response.json();
      //can move this API call to another file which will return response here
      dispatchData(setData(data));
    };
    if (persistedData.length === 0) fetchData();
  }, [dispatchData, persistedData.length]);
  const pincode = useSelector((state) => state.serve.pincode);
  const dispatchPincode = useDispatch(setPincode);
  const handleChange = (e) => {
    dispatchPincode(setPincode(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        minLength="6"
        maxLength="6"
        onChange={handleChange}
        value={pincode}
        placeholder="Enter Pincode"
      ></input>
  </>
  );
};
