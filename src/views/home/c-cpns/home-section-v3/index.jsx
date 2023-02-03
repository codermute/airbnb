import LongforItem from "@/components/longfor-item";
import SectionTitle from "@/components/section-title";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV3Wrapper } from "./style";

const HomeSectionV3 = memo((props) => {
  const { houseData } = props;

  return (
    <SectionV3Wrapper>
      <SectionTitle title={houseData.title} subtitle={houseData.subtitle} />
      <LongforItem houseInfo={houseData.list} />
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  houseData: PropTypes.object,
};

export default HomeSectionV3;
