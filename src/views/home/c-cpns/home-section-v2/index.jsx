import SectionFooter from "@/components/section-footer";
import SectionHouse from "@/components/section-house";
import SectionTabs from "@/components/section-tabs";
import SectionTitle from "@/components/section-title";
import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  const { houseData } = props;

  const showTabs = houseData.dest_address.map((item) => item.name);
  const currentAddress = Object.keys(houseData.dest_list)[0];

  const [name, setName] = useState(currentAddress);

  const itemClick = useCallback(function (name) {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionTitle title={houseData.title} subtitle={houseData.subtitle} />
      <SectionTabs tabList={showTabs} itemClick={itemClick} />
      <SectionHouse
        houseInfo={houseData?.dest_list?.[name]}
        itemWidth="33.33333%"
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  houseData: PropTypes.object,
};

export default HomeSectionV2;
