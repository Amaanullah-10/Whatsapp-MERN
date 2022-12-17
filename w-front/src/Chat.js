import React, { useState } from "react";
import './Chat.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { AttachFile, MoreVert, SearchOutlined} from "@mui/icons-material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { Icon } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
function Chat() {
  const Send=()=>{
    const favicon=Chat();
    favicon.href=<SendIcon/>;
  }
  const current=new Date();
  const time= current.toLocaleTimeString("en-IN",{
    hour:"2-digit",
    minute:"2-digit",
  })
  return (
    <div className="chat">
      <div className="chat__header">
        <IconButton>
          <AccountCircleIcon/>
          </IconButton>
        
      <div className="chat_headerInfo">
        <h3>Room name</h3>
        <p>Last seen at {time}</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <SearchOutlined/>
        </IconButton>
        <IconButton>
                  <AttachFile/>
                </IconButton>
        <IconButton>
          <MoreVert/>
        </IconButton>
    </div>
    </div>
    <div className="chat__body">
    <p className="chat__message">
      <span className="chat__name">
        Hey bro
      </span>
      This is a message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
    
    <p className="chat__message chat__reciever">
      <span className="chat__name">
      Hey bro
      </span>
      This is a message
      <span className="chat__timestamp">{new Date().toUTCString()}</span>
    </p>
    </div>
    <div className="chat_footer">
      <IconButton>
        <InsertEmoticonIcon/>
      </IconButton>
    <form className="chat_contain">
      <input type="text" placeholder="..."></input>
      <button onChange={Send} type="submit"></button>
      </form>
      <IconButton>
        <MicIcon/>
        </IconButton>
    </div>
    </div>
  )
}

export default Chat