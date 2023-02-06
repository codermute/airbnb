import React, { memo, useState } from "react";
import { FilterWrapper } from "./style";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const [current, setCurrent] = useState([]);

  function itemClick(name) {
    const newCurrent = [...current];

    if (newCurrent.includes(name)) {
      const index = newCurrent.indexOf(name);
      newCurrent.splice(index, 1);
    } else {
      newCurrent.push(name);
    }
    setCurrent(newCurrent);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => (
          <span
            className={classNames("item", { active: current.includes(item) })}
            onClick={() => itemClick(item)}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
