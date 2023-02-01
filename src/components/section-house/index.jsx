import PropTypes from "prop-types";
import React, { memo } from "react";
import { HouseWrapper } from "./style";
import HouseItem from "@/components/house-item";

const SectionHouse = memo((props) => {
  const { houseInfo, itemWidth = "25%" } = props;

  return (
    <HouseWrapper>
      {houseInfo?.slice(0, 8).map((item) => (
        <HouseItem houseData={item} itemWidth={itemWidth} key={item.id} />
      ))}
    </HouseWrapper>
  );
});

SectionHouse.propTypes = {
  houseInfo: PropTypes.array,
};

export default SectionHouse;
