import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//register
export const userRegister = createAsyncThunk("user/", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user);
    //console.log(result.data , "result data")

    return result.data;
  } catch (error) {
    console.log(error);
  }
});
// export const register = createAsyncThunk(
//   "user/register",
//   async (user, { dispatch }) => {
//     const response = await axios.post(
//       `${config.API_ENDPOINT}/user/register`,
//       user
//     );
//     dispatch(login({ email: user.email, password: user.password }));
//     return response.data;
//   }
// );
//activate accounte
export const activateAccount = createAsyncThunk(
  "user/verify-account",
  async ({ token }) => {
    try {
      let result = axios.post(
        `http://localhost:5000/user/verify-account/${token}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
//login
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
//current user
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
export const getusers = createAsyncThunk("user/getall", async () => {
  try {
    let result = await axios.get(`http://localhost:5000/user/all`);
    console.log(result.data.users);
    return result?.data?.users;
    // console.log(result.data.data.users)
  } catch (error) {
    console.log(error);
  }
});

//forgot password
export const Forgot_password = createAsyncThunk(
  "user/forgot-password",
  async (email) => {
    try {
      let result = await axios.post(
        "http://localhost:5000/user/forgot-password",
        email
      );
      // console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//reset password
export const resetpassword = createAsyncThunk(
  "user/reset-password",
  async ({ token, password }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/user/reset-password/${token}`,
        { password }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Re-throw the error to propagate it to the Redux store
    }
  }
);

const initialState = {
  user: null,
  status: null,
  users: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // register extra reducers
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      });
    // verify-account extra reducers
    builder
      .addCase(activateAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(activateAccount.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.user;
        // localStorage.setItem("token", action.payload.token);
      })
      .addCase(activateAccount.rejected, (state) => {
        state.status = "fail";
      });
    //forgot password
    builder
      .addCase(Forgot_password.pending, (state) => {
        state.status = "loading";
      })
      .addCase(Forgot_password.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(Forgot_password.rejected, (state) => {
        state.status = "fail";
      });

    // resetpassword extra reducers
    builder
      .addCase(resetpassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetpassword.fulfilled, (state, action) => {
        state.status = "success";
        state.resetStatus = action.payload.status;
        // localStorage.setItem("token", action.payload.token);
      })
      .addCase(resetpassword.rejected, (state) => {
        state.status = "fail";
      });
    // login extra reducers
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        console.log("=========", action.payload);

        // Check if 'user' and 'token' properties exist in action.payload
        if (action.payload && action.payload.user && action.payload.token) {
          state.user = action.payload.user;
          localStorage.setItem("token", action.payload.token);
        } else {
          console.error("Invalid payload structure:", action.payload);
          // Optionally handle the error or set state to an appropriate value
        }

        return state;
      })

      .addCase(userLogin.rejected, (state) => {
        state.status = "fail";
      });

    builder
      // current user cases
      .addCase(userCurrent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload?.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      });

    builder
      // all  user
      .addCase(getusers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(getusers.rejected, (state) => {
        state.status = "fail";
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
