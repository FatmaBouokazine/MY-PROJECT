import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Profile from "./Pages/Profile";
import Register from "./Components/Register";
import PrivateRoute from "./routes/PriveteRoute";
import { getusers, userCurrent } from "./redux/userSlice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Verifyaccount from "./Pages/Verifyaccount";
import Forgotpassword from "./Pages/Forgotpassword";
import Reset_password from "./Pages/Reset_password";

// --------------------end importation------------------
function App() {
  //verify user is logged in
  const isAuth = localStorage.getItem("token");
  //declaration dipatch
  const dispatch = useDispatch();

  //useEffect & dispatch to get data
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(getusers());
  }, [dispatch]);
  const users = useSelector((state) => state.user?.users);
  console.log(users, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* login route */}
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path="/profile" element={<Profile />} /> {/* Profile route */}
        <Route path="/verify-account/:token" element={<Verifyaccount />} />
        {/*verification compte */}
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        {/* forgot password */}
        <Route path="/reset-password/:token" element={<Reset_password />} />
        {/* reset password */}
      </Routes>
    </>
  );
}

export default App;
