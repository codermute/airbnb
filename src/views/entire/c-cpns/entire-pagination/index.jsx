import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHouseListAction } from "@/store/modules/entire/actionCreators";

const EntirePagination = memo(() => {
  const { totalCount } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);

  const disPatch = useDispatch();
  function changePageHandle(event, page) {
    window.scrollTo(0, 0);
    disPatch(fetchHouseListAction(page - 1));
  }

  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination count={totalPage} onChange={changePageHandle} />
      </div>
    </PaginationWrapper>
  );
});

export default EntirePagination;
