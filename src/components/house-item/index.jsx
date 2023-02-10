import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { Rate, Carousel } from "antd";
import { HouseWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";

const HouseItem = memo((props) => {
  const { houseData, itemWidth } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

  function controlClickHandle(isNext = true) {
    isNext ? carouselRef.current.next() : carouselRef.current.prev();

    const length = houseData?.picture_urls?.length;
    let selectIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (currentIndex > length - 1) selectIndex = 0;
    if (currentIndex < 0) selectIndex = length - 1;
    setCurrentIndex(selectIndex);
  }

  const pictureElement = (
    <div className="cover">
      <img src={houseData.picture_url} alt={houseData.name} />
    </div>
  );

  const carouselElement = (
    <div className="carousel">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>

      <div className="indicator">
        <Indicator selectIndex={currentIndex}>
          {houseData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span
                  className={classNames("dot", {
                    active: currentIndex === index,
                  })}
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>

      <Carousel dots={false} ref={carouselRef}>
        {houseData?.picture_urls?.map((item, index) => {
          return (
            <div className="cover" key={index}>
              <img src={item} alt={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  return (
    <HouseWrapper
      introduceColor={houseData?.verify_info.text_color}
      contentColor={houseData?.bottom_info?.content_color}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {houseData.picture_urls ? carouselElement : pictureElement}
        <span className="introduce">
          {houseData.verify_info.messages?.join(".")}
        </span>
        <p className="name">{houseData.name}</p>
        <span className="price">￥{houseData.price}/晚</span>
        <div className="bottom">
          <Rate
            allowHalf
            disabled
            defaultValue={houseData.star_rating ?? 1}
            style={{ fontSize: 12, marginTop: 2 }}
          />
          <div className="bottom_info">
            <span>{houseData.reviews_count}</span>
            {houseData?.bottom_info?.content && (
              <span>.{houseData?.bottom_info?.content}</span>
            )}
          </div>
        </div>
      </div>
    </HouseWrapper>
  );
});

HouseItem.propTypes = {
  houseData: PropTypes.object,
};

export default HouseItem;
