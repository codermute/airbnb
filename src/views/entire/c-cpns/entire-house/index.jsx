import HouseItem from "@/components/house-item";
import { changeDetailInfoAction } from "@/store/modules/detail";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HouseWrapper } from "./style";

const EntireHouse = memo(() => {
  const { houseList, isLoading } = useSelector(
    (state) => ({
      houseList: state.entire.houseList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClick = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate("/detail");
    },
    [dispatch, navigate]
  );

  return (
    <HouseWrapper>
      <div className="list">
        {houseList.map((item) => (
          <HouseItem
            houseData={item}
            key={item._id}
            itemWidth="20%"
            itemClick={itemClick}
          />
        ))}
      </div>

      {isLoading && <div className="cover"></div>}
    </HouseWrapper>
  );
});

export default EntireHouse;
