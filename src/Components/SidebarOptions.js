import { Apps } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import db from "./firebase";
import {enterRoom} from "../features/appSlice.js"

const SidebarOptions = ({ Icon, title,addSidebarOptionChannel,id }) => {
   const dispatch=useDispatch();

   const addChannel=()=>{
      const channelName=prompt("Enter Class name:");

      if(channelName){
         db.collection('rooms').add({
            name:channelName,
         })
      }
   }
   const selectChannel=()=>{
      if(id){
         dispatch(enterRoom({
            roomId:id,
         }))
      }
   }
   return (
      <SidebarOptionsContainer 
        onClick={addSidebarOptionChannel ? addChannel :selectChannel }
      >
         {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
         {Icon ? (
            <h3>{title}</h3>
         ) : (
            <SidebarOptionChannel>
               <span>#</span>
               {title}
            </SidebarOptionChannel>
         )}
      </SidebarOptionsContainer>
   );
};

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
   display: flex;
   font-size: 12px;
   align-items: center;
   padding-left: 2px;

   :hover {
    opacity: 0.9;
      background-color: #250b25;
      cursor:pointer;
   }
   > h3{
       font-weight:500;
   }
   > h3 > span{
       padding:15px;
   }
`;
const SidebarOptionChannel = styled.h3`
  padding:10px 0;
  font-weight:800;

  > span{
     font-size:19px;
  }
`;
