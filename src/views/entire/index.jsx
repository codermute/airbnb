import { fetchHouseListAction } from "@/store/modules/entire/actionCreators";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouseListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
    </EntireWrapper>
  );
});

export default Entire;
