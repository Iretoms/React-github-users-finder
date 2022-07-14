import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../features/user/userSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser("Iretoms"));
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);

  return <div>{user.name}</div>;
};

export default UserInfo;
