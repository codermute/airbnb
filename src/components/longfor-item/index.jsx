import ScrollView from "@/base-ui/scroll-view";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { houseInfo } = props;

  return (
    <LongforItemWrapper>
      <ScrollView>
        {houseInfo.map((item) => {
          return (
            <div className="inner" key={item.city}>
              <img src={item.picture_url} alt={item.city} />
              <div className="masking"></div>
              <div className="info">
                <span className="city">{item.city}</span>
                <span className="price">均价{item.price}</span>
              </div>
            </div>
          );
        })}
      </ScrollView>
    </LongforItemWrapper>
  );
});

LongforItem.propTypes = {
  houseInfo: PropTypes.array,
};

export default LongforItem;
