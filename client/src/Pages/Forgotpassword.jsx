import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Forgot_password } from "../redux/userSlice/userSlice";
import { Navigate } from "react-router-dom";

const Forgotpassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  
 

  return (
    <div>
   

        <div>
          <input
            type="email"
            placeholder="email"
            value={email} // Changed to use value instead of onChange
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={()=>dispatch(Forgot_password({ email }))}>Reset password</button>{" "}
        </div>
      

      {/* Removed () from onClick */}
    </div>
  );
};

export default Forgotpassword;
