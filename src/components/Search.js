import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { fetchUser } from "../features/user/userSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(fetchUser(username));

    setUsername("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <FaSearch color="#0079ff" size="1.5rem" />
      <Input
        type="text"
        placeholder="Github Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: ${(props) => props.theme.boxShadow};
  svg {
    position: absolute;
    left: 15px;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.bgColor1};
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  height: 3.5rem;
  padding: 0 3rem 0 4rem;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme.text2};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.text2};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 5px;
  font-family: inherit;
  height: 3rem;
  width: 6rem;
  border: none;
  background-color: #1077ff;
  color: #fff;
  padding: 0 1rem;
  border-radius: 9px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
`;

export default Search;
