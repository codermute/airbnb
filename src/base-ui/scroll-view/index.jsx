import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const scrollRef = useRef();

  useEffect(() => {}, [props.children]);

  function rightClick() {
    console.log(scrollRef.current.scrollWidth, scrollRef.current.clientWidth);
  }

  return (
    <ViewWrapper>
      <div className="control left">
        <IconArrowLeft />
      </div>
      <div className="control right" onClick={rightClick}>
        <IconArrowRight />
      </div>

      <div className="content" ref={scrollRef}>
        {props.children}
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
