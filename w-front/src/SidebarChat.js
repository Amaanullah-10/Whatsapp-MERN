import React from 'react'
import './SidebarChat.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function SidebarChat() {
  return (
    <div className="sidebarChat">
        <div className="icon">
            <AccountCircleIcon />
        </div>
                <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>THis is my room</p>
        </div>
    </div>
  )
}

export default SidebarChat