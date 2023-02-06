import HouseItem from "@/components/house-item";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { HouseWrapper } from "./style";

const EntireHouse = memo(() => {
  const { houseList } = useSelector(
    (state) => ({
      houseList: state.entire.houseList,
    }),
    shallowEqual
  );

  return (
    <HouseWrapper>
      <div className="list">
        {houseList.map((item) => (
          <HouseItem houseData={item} key={item._id} itemWidth="20%" />
        ))}
      </div>
    </HouseWrapper>
  );
});

export default EntireHouse;
