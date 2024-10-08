import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import UserInfo from "../components/UserInfo";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const GitHub = () => {
  const { user, pending } = useSelector((state) => state.user);

  return (
    <Section>
      <Header />
      <Container>
        <Search />
        {!pending && user && <UserInfo user={user} />}
      </Container>
    </Section>
  );
};

const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  transition: all 0.5s ease;
`;

const Container = styled(motion.div)`
  width: 40rem;
  margin-top: 2rem;

  @media screen and (max-width: 700px) {
    width: 30rem;
  }

  @media screen and (max-width: 550px) {
    width: 22rem;
  }
`;
export default GitHub;
