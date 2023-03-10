import ScrollView from "@/base-ui/scroll-view";
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
      <div className="house-list">
        <ScrollView>
          {houseData.list.map((item) => {
            return <LongforItem houseInfo={item} key={item.city} />;
          })}
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  houseData: PropTypes.object,
};

export default HomeSectionV3;
