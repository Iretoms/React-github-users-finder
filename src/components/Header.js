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

  const themeName = theme.theme === "light" ? "Light" : "Dark";
  const icon =
    theme.theme === "light" ? <CgSun size="1rem" /> : <HiMoon size="1rem" />;

  return (
    <StyledHeader>
      <h1>DEV FINDER</h1>
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
  color:${props => props.theme.text1};
  button {
    display: flex;
    align-items: center;
  }
`;

export default Header;
