// Config starter code
import React from 'react';
import BotAvatar from './BotAvatar/BotAvatar';
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from './Todos/Todos';

import Options from './Options/Options';
import Quiz from "./Quiz/Quiz";

import "remixicon/fonts/remixicon.css";
import '../../styles/chat_bot/chatbot.css';

import Header from "./Style/ChatHeader";
import ChatMessage from "./Style/ChatMessage.js";

import Ticket_1 from '../chat_bot/Ticket/Ticket_1.js';
import Tickect_1_2_Qe from '../chat_bot/Ticket/Tickect_1_2_Qe.js';

import GoMovieHome from '../chat_bot/Options/GoMovieHome.js';

const ChatbotConfig = {
    initialMessages: [
      createChatBotMessage(`안녕하세요? \n 무엇을 도와 드릴까요?`, {
        widget: "options",
      }),
    ],
    botName:"IM_Movie",
    customComponents : {
      header: () => <Header />,
      botChatMessage: (props) => <ChatMessage {...props}  />,
      botAvatar: (props) => <BotAvatar {...props} />,
    },

    widgets: [
      // 영화예매 , 영화소식, 스토어
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },

      {
        widgetName: "chooseTickeck", // 위젯의 이름 설정
        widgetFunc: (props) => <Ticket_1 {...props} />, // 해당 위젯을 렌더링
      },

      {
        widgetName: "tickect_1_2_Q",
        widgetFunc: (props) => <Tickect_1_2_Qe {...props} />,
      },

      {
        widgetName: "goMovieHome",
        widgetFunc: (props) => <GoMovieHome {...props} />,
      },
    ],
}
  
  export default ChatbotConfig