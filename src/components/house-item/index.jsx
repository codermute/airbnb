import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rate } from "antd";
import { HouseWrapper } from "./style";

const HouseItem = memo((props) => {
  const { houseData, itemWidth } = props;

  return (
    <HouseWrapper
      introduceColor={houseData?.verify_info.text_color}
      contentColor={houseData?.bottom_info?.content_color}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="good">
          <img src={houseData.picture_url} alt={houseData.name} />
        </div>
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
          <span className="bottom_info">
            {houseData.reviews_count}.{houseData?.bottom_info?.content}
          </span>
        </div>
      </div>
    </HouseWrapper>
  );
});

HouseItem.propTypes = {
  houseData: PropTypes.object,
};

export default HouseItem;
