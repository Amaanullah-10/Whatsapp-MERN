import React from 'react';
import  "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';

import IconButton from '@mui/material/IconButton';
// or

import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
        <AccountCircleIcon/>

        </IconButton>
        
        </div>
        <div className="sidebar__right">
        <IconButton>
          <DonutLargeIcon/>
        </IconButton>
        <IconButton>
          <ChatIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchIcon/>
            <input type="text" placeholder="Search" />
          </div>

        </div>
        <div className="sidebar__chats">
          <SidebarChat/>
          <SidebarChat/>
<SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          
          </div>
    </div>
  )
}

export default Sidebar