import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const Header = () => {
   const [user]=useAuthState(auth);

   return (
      <HeaderContainer>
         <HeaderLeft>
            <HeaderAvatar src={user?.photoURL} alt={user?.displayName} />
            <AccessTimeIcon />
         </HeaderLeft>

         <HeaderSearch>
            <SearchIcon />
            <input type="text" placeholder="Search Web & Phoenix.." />
         </HeaderSearch>

         <HeaderRight>
            <HelpOutlineIcon />
         </HeaderRight>
      </HeaderContainer>
   );
};

export default Header;

const HeaderContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: var(--primary_color);
   padding: 10px 0;
`;
const HeaderLeft = styled.div`
   display: flex;
   flex: 0.3 !important;
   align-items: center;
   margin-left: 20px;
   > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 10px;
      color: #fff;
      cursor: pointer;
   }
`;
const HeaderAvatar = styled(Avatar)`
   :hover {
      opacity: 0.7;
   }
`;
const HeaderSearch = styled.div`
   display: flex;
   flex: 0.4;
   opacity: 1;
   padding: 0 50px;
   border: 1px solid #fff;
   border-radius: 6px;
   color: gray;
   text-align: center;

   > input {
      border: 0;
      background-color: transparent;
      text-align: center;
      color: #fff;
      min-width: 30vw;
      outline: 0;
   }
`;
const HeaderRight = styled.div`
   flex: 0.3;
   display: flex;
   justify-content: end;
   color: #fff;

   > .MuiSvgIcon-root {
      margin-left: auto;
      margin-right: 20px;
   }
`;
