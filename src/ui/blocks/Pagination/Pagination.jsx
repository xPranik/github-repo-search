import React from "react";
import { ButtonStyled, PageNum, PaginationWrap } from "./PaginationStyled";

const Pagination = ({ onPageChanged, page, limit = 10, count }) => {
  const maxPages = Math.ceil(count / limit);

  return (
    <PaginationWrap>
      <ButtonStyled
        disabled={page === 1}
        onClick={() => onPageChanged(page - 1)}
      >
        Prev
      </ButtonStyled>
      <PageNum>{page}</PageNum>
      <ButtonStyled
        disabled={page === maxPages}
        onClick={() => onPageChanged(page + 1)}
      >
        Next
      </ButtonStyled>
    </PaginationWrap>
  );
};

export default Pagination;
