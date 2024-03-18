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

const ChatbotConfig = {
    //ActionProvider > MessageParser
    // 메시지 입력 >  결과값 작성 

    // 초기 나올것 
    // initialMessages: [createChatBotMessage(`안녕하세요? 반갑습니다.`)],

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

    // state: {
    //   todos : []

    // },
    widgets: [
      // 영화예매 , 영화소식, 스토어
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },

      {
        widgetName: "chooseTickeck", // 위젯의 이름 설정
        widgetFunc: (props) => <Ticket_1 {...props} />, // 해당 위젯을 렌더링
        // props: {
        //   questions: [
        //     {
        //       answer: "어떤 장르를 좋아하세요?",
        //       question: "공포",
        //       id: 1,
        //       widgetName: "tickect_1_2_Q", // options 위젯을 나타내는 이름 설정
        //       widgetFunc: (props) => <tickect_1_2_Q {...props} />, // options 위젯 렌더링
        //     },
        //     {
        //       question: "Explain prototypal inheritance",
        //       answer: "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
        //       id: 2,
        //     },
        //   ],
        // },
      },

      {
        widgetName: "tickect_1_2_Q",
        widgetFunc: (props) => <Tickect_1_2_Qe {...props} />,
      },


   
      
      
   
    ],
 
    // 위젯으로 만들고 싶을떄 
    // widgets: [
    //   {
    //     widgetName: "todos",
    //     widgetFunc: (props) => <Todos {...props} />,
    //     mapStateToProps: ["todos"],
    //   },
    // ],

}
  
  export default ChatbotConfig