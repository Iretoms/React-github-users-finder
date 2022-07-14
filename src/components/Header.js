import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HiMoon } from "react-icons/hi";
import { CgSun } from "react-icons/cg";
import { ThemeContext } from "../App";

const Header = () => {
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    theme.theme === "light" ? theme.setTheme("dark") : theme.setTheme("light");
  };

  const themeName = theme.theme === "light" ? "DARK" : "LIGHT";
  const icon =
    theme.theme === "light" ? (
      <HiMoon size="1.5rem" />
    ) : (
      <CgSun size="1.5rem" />
    );

  return (
    <StyledHeader>
      <h1>devSearcher</h1>
      <button onClick={changeTheme}>
        <span>{themeName}</span> {icon}
      </button>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.header)`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.text1};
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    font-family: inherit;
    color: ${(props) => props.theme.text2};
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #2b3442;
    }
    span {
      margin-right: 1rem;
    }
  }
`;

export default Header;
