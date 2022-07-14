import React, { useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import UserInfo from "../components/UserInfo";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";

const GitHub = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser("Iretoms"));
  }, [dispatch]);

  const { user, pending, error } = useSelector((state) => state.user);
  return (
    <Section>
      <Header />
      <Container>
        <Search />
        <UserInfo
          name={user.name}
          username={user.login}
          joined={user.created_at}
          bio={user.bio}
          picture={user.avatar_url}
          repos={user.public_repos}
          following={user.following}
          followers={user.followers}
          link={user.html_url}
        />
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
