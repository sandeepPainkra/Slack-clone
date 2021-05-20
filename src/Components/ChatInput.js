import { Button } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import db, { auth } from "./firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelId,ChatRef }) => {
   const [user]=useAuthState(auth);
   const [input, setInput] = useState("");

   const SendMessage = (event) => {
      event.preventDefault();

      if (channelId) {
         db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage:user.photoURL,
         });
      }
      ChatRef?.current.scrollIntoView({
         behavior:"smooth"
      })

      setInput("");
   };
   return (
      <ChatInputContainer>
         <form>
            <input
               onChange={(e) => setInput(e.target.value)}
               value={input}
               placeholder={`Message #${channelName}`}
            />
            <Button type="submit" hidden onClick={SendMessage}>
               SEND
            </Button>
         </form>
      </ChatInputContainer>
   );
};

export default ChatInput;

const ChatInputContainer = styled.div`
   border-radius: 2px;

   > form {
      position: relative;
      display: flex;
      justify-content: center;
   }
   > form > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
   }
   > form > button {
      display: none !important;
   }
`;
