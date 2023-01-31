import { fetchHomeInfoAction } from "@/store/modules/home";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HeaderBanner from "./c-cpns/header-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeInfoAction());
  }, [dispatch]);

  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.homeGoodPriceInfo,
      highScoreInfo: state.home.homeHighScoreInfo,
      hotRecommendInfo: state.home.homeHotRecommendInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HeaderBanner />
      <div className="content">
        <HomeSectionV1 houseData={goodPriceInfo} />
        <HomeSectionV1 houseData={highScoreInfo} />

        {/* <SectionTitle
          title={hotRecommendInfo.title}
          subtitle={hotRecommendInfo.subtitle}
        />
        <SectionHouse houseInfo={hotRecommendInfo?.list} /> */}
      </div>
    </HomeWrapper>
  );
});

export default Home;
