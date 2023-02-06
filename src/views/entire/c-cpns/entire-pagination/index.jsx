import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper } from "./style";

const EntirePagination = memo(() => {
  return (
    <PaginationWrapper>
      <div className="info">
        <Pagination count={10} />
      </div>
    </PaginationWrapper>
  );
});

export default EntirePagination;
