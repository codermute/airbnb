import PropTypes from "prop-types";
import React, { memo } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  return (
    <IndicatorWrapper>
      <div className="list">{props.children}</div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
