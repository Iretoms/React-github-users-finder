import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs"

const UserInfo = ({
  name,
  username,
  joined,
  bio,
  picture,
  repos,
  following,
  followers,
  link,
}) => {
  return (
    <Profile>
      <Image>
        <img src={picture} alt={name} />
      </Image>
      <div class="user-info">
        <Name>
          <div>
            <h2>{name}</h2>
            <small>@{username}</small>
          </div>
          <small>Joined {new Date(joined).toDateString()}</small>
        </Name>

        <About>{bio ? bio : ""}</About>

        <Activity>
          <div class="repos">
            <small>Repos</small>
            <h2>{repos}</h2>
          </div>
          <div class="followers">
            <small>Followers</small>
            <h2>{followers}</h2>
          </div>
          <div class="following">
            <small>Following</small>
            <h2>{following}</h2>
          </div>
        </Activity>

        <Link>
          <BsLink45Deg size="1.5rem"/>
          <a href={link}>{link}</a>
        </Link>
      </div>
    </Profile>
  );
};

const Profile = styled(motion.div)`
  width: 100%;
  padding: 2rem 2rem 2rem 3rem;
  background-color: ${(props) => props.theme.bgColor1};
  margin-top: 1.5rem;
  display: flex;
  gap: 1.8rem;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Image = styled.div`
  background: ${(props) => props.theme.bgColor2};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: center;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    margin-right: 5.7rem;
    h2 {
      color: ${(props) => props.theme.text1};
      padding-top: 3px;
      line-height: 1.5rem;
    }
    small {
      color: #0079ff;
    }
  }
  small {
    color: ${(props) => props.theme.text2};
  }
`;

const About = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.text1};
`;

const Activity = styled.div`
  background-color: ${(props) => props.theme.bgColor2};
  margin-top: 1.6rem;
  padding: 1rem 2rem;
  display: flex;
  border-radius: 10px;
  div {
    text-align: center;
    margin-right: 3rem;
    color: ${(props) => props.theme.text1};
  }
`;

const Link = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text2};
  a {
    margin-left: 0.5rem;
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default UserInfo;
