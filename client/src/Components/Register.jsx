import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../redux/userSlice/userSlice';

const Register = () => {
    const [register, setRegister] = useState({
        username: "",
        nom: "",
        prenom: "",
        email: "",
        password: "",
      });
        const navigate = useNavigate();
    
      const dispatch = useDispatch();
  return (
    <div onSubmit={(e) => e.preventDefault()} className="login_box">
    <div >
      <div >
       
      </div>
      <div >
        <form action="true">
          <h3>SIGN UP</h3>
          <input
            type="text"
            placeholder="username"
            onChange={(e) =>
              setRegister({
                ...register,
                username: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="nom"
            onChange={(e) =>
              setRegister({ ...register, nom: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="prenom"
            onChange={(e) =>
              setRegister({
                ...register,
                prenom: e.target.value,
              })
            }
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setRegister({
                ...register,
                email: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="Phone password"
            onChange={(e) =>
              setRegister({
                ...register,
                password: e.target.value,
              })
            }
          />
     
          <button
            className="submit"
            onClick={() => {
              dispatch(userRegister(register));
              setTimeout(() => {
                navigate("/profile");
              }, 2500);
            }}
          >
            register
          </button>
          <h5>
            You already have acount <Link to="/login">sign in</Link>
          </h5>
        </form>
      </div>
    </div>
    <div >
 
    </div>
  </div>
  )
}

export default Register