import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //get current user with selector
  const user = useSelector((state) => state.user?.user);
  console.log(user?.isActivated);
  return (
    <>
      {user?.isActivated == true ? (
        <div>
          Profile
          <h1>username: {user?.username}</h1>
          <h1>{user?.nom}</h1>
          <h1>{user?.prenom}</h1>
          <h1>{user?.email}</h1>
          <h4
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </h4>
        </div>
      ) : (
        <div style={{ color: "red" }}>vérifier votre compte dans mail</div>
      )}
    </>
  );
};

export default Profile;
