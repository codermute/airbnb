import IconGlobal from "@/assets/svg/icon-global";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [isShow, setShowPanel] = useState(false);

  useEffect(() => {
    function panelShowHandle() {
      setShowPanel(false);
    }

    window.addEventListener("click", panelShowHandle, true);

    return () => {
      window.removeEventListener("click", panelShowHandle, true);
    };
  }, []);

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={() => setShowPanel(true)}>
        <IconProfileMenu />
        <span className="avatar">
          <IconProfileAvatar />
        </span>
        <div className="dir-ltr"></div>

        {isShow && (
          <div className="panel">
            <div className="top">
              <span className="item register">注册</span>
              <span className="item">登录</span>
            </div>
            <div className="bottom">
              <span className="item">来爱彼迎发布房源</span>
              <span className="item">开展体验</span>
              <span className="item">帮助</span>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
