import IconSearchBar from "@/assets/svg/icon-search-bar";
import React, { memo } from "react";
import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search">
        <h4 className="text">搜索房源和体验</h4>
        <span className="icon">
          <IconSearchBar />
        </span>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
