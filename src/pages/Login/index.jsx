import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput";
import { Button } from "../../global.styles";
import { setCurrentUser } from "../../redux/user/user.actions";
import styled from "styled-components";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const login = (email, password) => {
    if (email === password) {
      dispatch(setCurrentUser(email));
      setUserEmail("");
      setUserPassword("");
    } else {
      alert("Incorrect Username of password");
      setUserEmail("");
      setUserPassword;
    }
  };
  return (
    <LoginContainer>
      <div style={{ alignSelf: "start" }}>
        <h1 style={{ fontSize: 32 }}> Login </h1>
        <p style={{ fontSize: 12, fontWeight: 500 }}>
          Get access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <div
        className="login-form"
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(userEmail, userPassword);
          }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FormInput
            name="email"
            type="email"
            value={userEmail}
            label="Email"
            handleChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={userPassword}
            label="Password"
            handleChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <Button style={{ marginTop: "30px" }} type="submit">
            Login
          </Button>
        </form>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  margin: 0 32px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-block: 64px;
`;

export default Login;
