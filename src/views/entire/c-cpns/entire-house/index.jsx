import HouseItem from "@/components/house-item";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { HouseWrapper } from "./style";

const EntireHouse = memo(() => {
  const { houseList, isLoading } = useSelector(
    (state) => ({
      houseList: state.entire.houseList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  function itemClick(item) {
    console.log(item);
  }

  return (
    <HouseWrapper>
      <div className="list">
        {houseList.map((item) => (
          <HouseItem
            houseData={item}
            key={item._id}
            itemWidth="20%"
            itemClick={itemClick}
          />
        ))}
      </div>

      {isLoading && <div className="cover"></div>}
    </HouseWrapper>
  );
});

export default EntireHouse;
