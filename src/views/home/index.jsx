import { fetchHomeInfoAction } from "@/store/modules/home";
import { isEmptyObject } from "@/utils";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HeaderBanner from "./c-cpns/header-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeInfoAction());
  }, [dispatch]);

  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.homeGoodPriceInfo,
        highScoreInfo: state.home.homeHighScoreInfo,
        discountInfo: state.home.homeDiscountInfo,
        hotRecommendInfo: state.home.homeHotRecommendInfo,
      }),
      shallowEqual
    );

  return (
    <HomeWrapper>
      <HeaderBanner />
      <div className="content">
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 houseData={discountInfo} />
        )}
        {isEmptyObject(hotRecommendInfo) && (
          <HomeSectionV2 houseData={hotRecommendInfo} />
        )}

        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 houseData={goodPriceInfo} />
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 houseData={highScoreInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
