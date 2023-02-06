import { fetchHouseListAction } from "@/store/modules/entire/actionCreators";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntireHouse from "./c-cpns/entire-house";
import EntirePagination from "./c-cpns/entire-pagination";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouseListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireHouse />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
