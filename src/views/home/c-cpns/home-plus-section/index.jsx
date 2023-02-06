import ScrollView from "@/base-ui/scroll-view";
import HouseItem from "@/components/house-item";
import SectionTitle from "@/components/section-title";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { PlusWrapper } from "./style";

const HomePlusSection = memo((props) => {
  const { houseData } = props;

  return (
    <PlusWrapper>
      <SectionTitle title={houseData.title} subtitle={houseData.subtitle} />
      <div className="house-list">
        <ScrollView>
          {houseData.list.map((item) => {
            return <HouseItem houseData={item} key={item.id} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
    </PlusWrapper>
  );
});

HomePlusSection.propTypes = {
  houseData: PropTypes.object,
};

export default HomePlusSection;
