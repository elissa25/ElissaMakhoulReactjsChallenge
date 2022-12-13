import { loginActions } from "./login-slice";

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch(loginActions.loginRequest());
    

    const sendLogin = async () => {
     
      const response = await fetch("http://34.245.213.76:3000/auth/signin", {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
     
      if (!response.ok) {
        throw new Error("Loginfailed.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await sendLogin();
      localStorage.setItem("token", data.accessToken);
      dispatch(loginActions.successLogin(data));
    } catch (error) {
      dispatch(loginActions.failedLogin(error.message));
    }
  };
};

export const logout = () =>{
  return async (dispatch) => {
  dispatch(loginActions.Logout());
  }
}
