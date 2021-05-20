import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import {
   Add,
   Apps,
   BookmarkBorder,
   Drafts,
   ExpandLess,
   ExpandMore,
   FileCopy,
   Inbox,
   InsertComment,
   PeopleAlt,
} from "@material-ui/icons";
import { useCollection } from "react-firebase-hooks/firestore";
import db, { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
   const [user]=useAuthState(auth);
   const [channels, loading, error] = useCollection(db.collection("rooms"));
   return (
      <SidebarContainer>
         <SidebarHeader>
            <SidebarInfo>
               <h2>{user.displayName}</h2>
               <h3>
                  <FiberManualRecordIcon />
                  active
               </h3>
            </SidebarInfo>
            <CreateIcon />
         </SidebarHeader>

         <SidebarOptions Icon={InsertComment} title="Threds" />
         <SidebarOptions Icon={Inbox} title="Mentions & reactions" />
         <SidebarOptions Icon={Drafts} title="Saved items" />
         <SidebarOptions Icon={BookmarkBorder} title="Channel browser" />
         <SidebarOptions Icon={PeopleAlt} title="People & users group" />
         <SidebarOptions Icon={Apps} title="Apps" />
         <SidebarOptions Icon={FileCopy} title="File browser" />
         <SidebarOptions Icon={ExpandLess} title="Show less" />
         <hr />
         <SidebarOptions Icon={ExpandMore} title="Channels" />
         <hr />
         <SidebarOptions Icon={Add} addSidebarOptionChannel title="Add class" />

         {channels?.docs.map((doc) => (
            <SidebarOptions
               key={doc.id}
               id={doc.id}
               title={doc.data().name}
            />
         ))}
      </SidebarContainer>
   );
};

export default Sidebar;

const SidebarContainer = styled.div`
   background-color: var(--primary_color);
   flex: 0.3;
   max-width: 260px;
   color: #fff;
   /* padding-top:10px; */
   border-top: 1px solid #49274b;

   > hr {
      width: 100%;
      height: 1px;
      border: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      background-color: #49274b;
   }
`;
const SidebarHeader = styled.div`
   display: flex;
   padding: 13px;
   border-bottom: 1px solid #494949;

   > .MuiSvgIcon-root {
      padding: 8px;
      color: #494949;
      font-size: 18px;
      background-color: white;
      border-radius: 999px;
   }
`;
const SidebarInfo = styled.div`
   flex: 1;
   > h2 {
      font-weight: 900;
      margin-bottom: 5px;
      font-size: 15px;
   }
   > h3 {
      display: flex;
      font-size: 13px;
      font-weight: 400;
      align-items: center;
   }
   > h3 > .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
   }
`;
