import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";
const Login = () => {
   const SignIn = () => {
      auth.signInWithPopup(provider).catch((error) => alert(error.message));
   };
   return (
      <LoginContainer>
         <LoginInner>
            <img
               src="https://tse2.mm.bing.net/th?id=OIP.MNQIGkQzDy9T2nWTkc1xTQHaHa&pid=Api&P=0&w=300&h=300"
               alt="Slack_logoImg"
            />

            <h2>Sign in to Slack</h2>
            <p>Sandeep.com</p>
            <Button onClick={SignIn}>Sign In with Google</Button>
         </LoginInner>
      </LoginContainer>
   );
};

export default Login;

const LoginContainer = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   place-items: center;
   background-color: #f8f8f8;
`;
const LoginInner = styled.div`
   padding: 50px;
   background-color: #fff;
   width: 40vw;
   text-align: center;
   box-shadow: 1px 4px 10px 9px gray;
   border-radius: 6px;

   > p {
      margin-bottom: 10px;
   }

   > img {
      width: 13% !important;
      margin-bottom: 10px;
   }
   > button {
      background-color: green !important;
      text-transform: inherit;
      color: white !important;
   }
`;
