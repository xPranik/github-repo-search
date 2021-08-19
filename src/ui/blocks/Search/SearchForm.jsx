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
            <option value="best_match">Best match</option>
            <option value="name asc">Name A-z</option>
            <option value="name desc">Name Z-a</option>
            <option value="stars desc">Stars to lower</option>
            <option value="stars asc">Stars to higher</option>
            <option value="updated desc">From new to old</option>
            <option value="updated asc">From old to new</option>
          </BaseSelect>
        </InputWrapper>
      </BaseForm>
    </FormWrapper>
  );
};

export default SearchForm;
