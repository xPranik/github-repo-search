import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
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

const SearchForm = () => {
  const [inputVal, setInputVal] = useState("");
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
      setSortType({ sort: "best_match", order: "" });
      typeSelectRef.current.options[0].selected = "selected";
    } else {
      setInputValid(false);
    }
  };
  const changeSortType = (e) => {
    const tempArr = e.target.value.split(" ");
    setSortType({ sort: tempArr[0], order: tempArr[1] });
  };

  const sortOptions = [
    {
      val: "best_match",
      placeholder: "Best match",
    },
    {
      val: "name asc",
      placeholder: "Name A-z",
    },
    {
      val: "name desc",
      placeholder: "Name Z-a",
    },
    {
      val: "stars desc",
      placeholder: "Stars to lower",
    },
    {
      val: "stars asc",
      placeholder: "Stars to higher",
    },
    {
      val: "updated desc",
      placeholder: "From new to old",
    },
    {
      val: "updated asc",
      placeholder: "From old to new",
    },
  ];

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
