import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories } from "../../../store/actions/repositories";
import {
  BaseForm,
  BaseInput,
  BaseSelect,
  ErrorLabel,
  FormWrapper,
  InputWrapper,
  SubmitButton,
} from "./SearchStyled";
import { sortOptions } from "../../../utils/consts";

const SearchForm = () => {
  const { query, repositories } = useSelector((state) => state.repositories);
  const [inputVal, setInputVal] = useState(query || "");
  const [inputValid, setInputValid] = useState(true);
  const [sortType, setSortType] = useState({ sort: "", order: "" });
  const typeSelectRef = useRef();
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputVal.length) {
      setInputValid(true);
      dispatch(
        fetchRepositories(inputVal, 10, 1, sortType.sort, sortType.order)
      );
      setInputVal("");
    } else {
      setInputValid(false);
    }
  };
  const changeSortType = (e) => {
    const tempArr = e.target.value.split(" ");
    setSortType({ sort: tempArr[0], order: tempArr[1] });
    const tempQuery = query || inputVal;
    tempQuery &&
      repositories.length !== 0 &&
      dispatch(
        fetchRepositories(tempQuery, 10, 1, sortType.sort, sortType.order)
      );
  };

  return (
    <FormWrapper>
      <BaseForm>
        <InputWrapper>
          <BaseInput
            type="text"
            placeholder="Type repository name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          {!inputValid && <ErrorLabel>Поле не может быть пустым</ErrorLabel>}
          <SubmitButton onClick={onSubmitHandler}>Search</SubmitButton>
        </InputWrapper>
        <InputWrapper>
          <BaseSelect onChange={changeSortType} ref={typeSelectRef}>
            {sortOptions.map((option) => (
              <option key={option.val} value={option.val}>
                {option.placeholder}
              </option>
            ))}
          </BaseSelect>
        </InputWrapper>
      </BaseForm>
    </FormWrapper>
  );
};

export default SearchForm;
