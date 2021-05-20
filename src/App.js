import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Chat from "./Components/Chat";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import { auth } from "./Components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Components/Login";
import Spinner from "react-spinkit";

function App() {
   const [user, loading] = useAuthState(auth);

   if(loading){
      return (
         <>
            <AppLoading>
               <AppLoadingInner>
                    <Spinner 
                    name="ball-spin-fade-loader"
                    fadeIn="none"
                       color="purple"
                    />
               </AppLoadingInner>
            </AppLoading>
         </>
      )
   }
   return (
      <div className="app">
         <Router>
            {!user ? (
               <Login />
            ) : (
               <>
                  <Header />
                  <AppBody>
                     <Sidebar />
                     <Switch>
                        <Route path="/" exact>
                           <Chat />
                        </Route>
                     </Switch>
                  </AppBody>
               </>
            )}
         </Router>
      </div>
   );
}

export default App;
const AppLoading=styled.div`
 display:grid;
 place-items:center;
 background-color:gray;
 width:100%;
 height:100vh;
`;
const AppLoadingInner=styled.div``;
const AppBody = styled.div`
   display: flex;
   height: 93vh;
`;
