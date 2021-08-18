import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../../../store/actions/repositories";
import { BaseForm, BaseInput, FormWrapper, SubmitButton } from "./SearchStyled";

const SearchForm = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(fetchRepositories(inputVal));
    setInputVal("");
  };

  return (
    <FormWrapper>
      <BaseForm>
        <BaseInput
          type="text"
          placeholder="Type repository name"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <SubmitButton onClick={onClickHandler}>Search</SubmitButton>
      </BaseForm>
    </FormWrapper>
  );
};

export default SearchForm;
