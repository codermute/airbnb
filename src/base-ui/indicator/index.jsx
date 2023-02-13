import PropTypes from "prop-types";
import React, { memo, useEffect, useRef } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;

  const contentRef = useRef();

  useEffect(() => {
    const currentEl = contentRef.current.children[selectIndex];
    const itemLeft = currentEl.offsetLeft;
    const itemWidth = currentEl.clientWidth;

    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;

    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    if (distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance;
    contentRef.current.style.transform = `translate(${-distance}px)`;
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
