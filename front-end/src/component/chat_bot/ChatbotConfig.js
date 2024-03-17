// Config starter code
import BotAvatar from './BotAvatar/BotAvatar';
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from './Todos/Todos';
import Options from './Options/Options';

import Quiz from "./Quiz/Quiz";

const ChatbotConfig = {
    //ActionProvider > MessageParser
    // 메시지 입력 >  결과값 작성 

    // 초기 나올것 
    // initialMessages: [createChatBotMessage(`안녕하세요? 반갑습니다.`)],

    initialMessages: [createChatBotMessage(`안녕하세요? 반갑습니다.`,{
        widget: "options",
      })
    ],
    widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      
      {
        widgetName: "javascriptQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          
          questions: [
            {
              question: "What is closure?",
              answer:
                "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
              id: 1,
            },
            {
              question: "Explain prototypal inheritance",
              answer:
                "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
              id: 2,
            },
          ],

        }
      }
    ],
    botName:"IM_Movie",
    botAvatar: (props) => <BotAvatar {...props} />,

    state: {
      todos : []

    },
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