import React from "react";
import Logo from '../../../assets/main/IM_Logo.png';
import './BotAvatar.css'

const BotAvatar = () =>{
    return <div className="chat-avatar">
        <img src={Logo} />
        
    </div>
}

export default BotAvatar;