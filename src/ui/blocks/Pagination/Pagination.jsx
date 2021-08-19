import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories } from "../../../store/actions/repositories";
import { ButtonStyled, PageNum, PaginationWrap } from "./PaginationStyled";

const Pagination = () => {
  const {
    page,
    limit = 10,
    count,
    query,
    sort,
    order,
  } = useSelector((state) => state.repositories);
  const dispatch = useDispatch();
  const maxPages = Math.ceil(count / limit);
  const changePageDown = () => {
    dispatch(fetchRepositories(query, limit, page - 1, sort, order));
  };
  const changePageUp = () => {
    dispatch(fetchRepositories(query, limit, page + 1, sort, order));
  };
  return (
    <PaginationWrap>
      <ButtonStyled disabled={page === 1} onClick={changePageDown}>
        Prev
      </ButtonStyled>
      <PageNum>{page}</PageNum>
      <ButtonStyled disabled={page === maxPages} onClick={changePageUp}>
        Next
      </ButtonStyled>
    </PaginationWrap>
  );
};

export default Pagination;
