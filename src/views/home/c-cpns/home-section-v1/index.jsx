import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import SectionHouse from "@/components/section-house";
import SectionTitle from "@/components/section-title";
import SectionFooter from "@/components/section-footer";

const HomeSectionV1 = memo((props) => {
  const { houseData } = props;

  return (
    <SectionV1Wrapper>
      <SectionTitle title={houseData.title} subtitle={houseData.subtitle} />
      <SectionHouse houseInfo={houseData?.list || []} />
      <SectionFooter />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  houseData: PropTypes.object,
};

export default HomeSectionV1;
