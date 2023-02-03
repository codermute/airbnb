import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const offsetRef = useRef();
  const showLeftRef = useRef(false);
  const newOffsetLeft = useRef(0);
  const [posIndex, setPosIndex] = useState(0);
  const [showRightRef, setRight] = useState(false);

  const scrollRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    offsetRef.current = scrollWidth - clientWidth;
    setRight(
      offsetRef.current > 0 && offsetRef.current > newOffsetLeft.current
    );
  }, [props.children]);

  function controlClickHandle(isR) {
    const newPosIndex = isR ? posIndex + 1 : posIndex - 1;
    const offsetEl = scrollRef.current.children[newPosIndex];
    newOffsetLeft.current = offsetEl.offsetLeft;
    scrollRef.current.style.transform = `translate(-${newOffsetLeft.current}px)`;
    newPosIndex > 0
      ? (showLeftRef.current = true)
      : (showLeftRef.current = false);
    setRight(offsetRef.current > newOffsetLeft.current);
    setPosIndex(newPosIndex);
  }

  return (
    <ViewWrapper>
      {showLeftRef.current && (
        <div className="control left" onClick={() => controlClickHandle()}>
          <IconArrowLeft />
        </div>
      )}
      {showRightRef && (
        <div className="control right" onClick={() => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
