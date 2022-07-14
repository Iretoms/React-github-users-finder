import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import UserInfo from "../components/UserInfo";

import styled from "styled-components";
import { motion } from "framer-motion";

const GitHub = () => {
  return (
    <Section>
      <Header />
      <Container>
        <Search />
        <UserInfo />
      </Container>
    </Section>
  );
};

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  transition: all 0.5s ease;
`;

const Container = styled(motion.div)`
  width: 40rem;
  margin-top: 2rem;
`;
export default GitHub;
