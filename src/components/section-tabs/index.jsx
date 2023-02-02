import ScrollView from "@/base-ui/scroll-view";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabList, itemClick } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(index, name) {
    setCurrentIndex(index);
    itemClick(name);
  }

  return (
    <TabsWrapper>
      <ul className="tabs">
        <ScrollView>
          {tabList.map((item, index) => (
            <li
              className={classNames("item", { active: currentIndex === index })}
              onClick={() => itemClickHandle(index, item)}
              key={item}
            >
              {item}
            </li>
          ))}
        </ScrollView>
      </ul>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabList: PropTypes.array,
};

export default SectionTabs;
