import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;

  const contentRef = useRef();

  useEffect(() => {
    console.log(contentRef.current.children[selectIndex]);
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="list" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
