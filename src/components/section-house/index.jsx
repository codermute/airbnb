import PropTypes from "prop-types";
import React, { memo } from "react";
import { HouseWrapper } from "./style";
import HouseItem from "@/components/house-item";

const SectionHouse = memo((props) => {
  const { houseInfo } = props;

  return (
    <HouseWrapper>
      {houseInfo?.slice(0, 8).map((item) => (
        <HouseItem houseData={item} key={item.id} />
      ))}
    </HouseWrapper>
  );
});

SectionHouse.propTypes = {
  houseInfo: PropTypes.array,
};

export default SectionHouse;
