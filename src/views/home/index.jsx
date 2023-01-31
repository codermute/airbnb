import HouseItem from "@/components/house-item";
import SectionTitle from "@/components/section-title";
import { fetchHomeGoodPriceInfo } from "@/store/modules/home";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Banner from "./c-cpns/banner";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.homeGoodPriceInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeGoodPriceInfo());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        <SectionTitle title={goodPriceInfo.title} />
        <div className="house">
          {goodPriceInfo?.list?.slice(0, 8).map((item) => (
            <HouseItem houseData={item} key={item.id} />
          ))}
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
