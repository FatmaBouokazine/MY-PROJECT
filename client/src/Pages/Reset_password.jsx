import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetpassword, selectResetStatus } from "../redux/userSlice/userSlice";

const Reset_password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const { token } = useParams();
  const [show, setshow] = useState(false);
  const [msg, setmsg] = useState(false);
  const [err, seterr] = useState(false);

  const confirmation = () => {
    if (password === password2) {
      dispatch(resetpassword({ token: token, password: password }));
      setmsg(true);
      seterr(false);
    } else {
      seterr(true);
    }
  };

  return (
    <div>
      {err == true && <p style={{ color: "red" }}>Passwords do not match</p>}
      {msg == false || err == true ? (
        <div>
          <input
            type={show? "text" :"password"}
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type={show ? "text" : "password"}
            placeholder="confirm password"
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
          />
          <button onClick={() => setshow(!show)}>show</button>
          <button onClick={confirmation}>Confirm</button>
        </div>
      ) : (
        <div style={{ color: "green" }}>Password successfully changed</div>
      )}
    </div>
  );
};

export default Reset_password;
