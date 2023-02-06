import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforItemWrapper } from "./style";

const LongforItem = memo((props) => {
  const { houseInfo } = props;

  return (
    <LongforItemWrapper>
      <div className="inner">
        <img src={houseInfo.picture_url} alt={houseInfo.city} />
        <div className="masking"></div>
        <div className="info">
          <span className="city">{houseInfo.city}</span>
          <span className="price">均价{houseInfo.price}</span>
        </div>
      </div>
    </LongforItemWrapper>
  );
});

LongforItem.propTypes = {
  houseInfo: PropTypes.object,
};

export default LongforItem;
