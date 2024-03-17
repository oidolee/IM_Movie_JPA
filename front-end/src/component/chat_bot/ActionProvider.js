// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }
    // set1 start
    greet = () =>{
        const message = this.createChatBotMessage("Hello friend");
        this.addMessageTostate(message);
    }

    addMessageTostate = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }))
    }

    // set1 end

    //Quiz
    handleJavascriptQuiz = () => {
        const message = this.createChatBotMessage(
          "Fantastic. Here is your quiz. Good luck!",
          {
            widget: "javascriptQuiz",
          }
        );
    
        this.addMessageToState(message);
    };



    // 기존 기본 테스트 

    helloWolrdHandler = () => {
        const message = this.createChatBotMessage("hihi createChatBotMessage!")
        this.setChatbotMessage(message);
    }

    todosHandler = () => {
        const message = this.createChatBotMessage("Sure, here's your todo",{
            widget : "todos"
        })
        this.setChatbotMessage(message);
    }

    todayMovies = () => {
        const message = this.createChatBotMessage("오늘의 영화는 파묘입니다.")
        this.setChatbotMessage(message);
    }


    setChatbotMessage = (message) =>{
        this.setState(state => ({ ...state, messages:[...state.messages, message]}))
    }
        


//     constructor(
//      createChatBotMessage,
//      setStateFunc,
//      createClientMessage,
//      stateRef,
//      createCustomMessage,
//      ...rest
//    ) {
//      this.createChatBotMessage = createChatBotMessage;
//      this.setState = setStateFunc;
//      this.createClientMessage = createClientMessage;
//      this.stateRef = stateRef;
//      this.createCustomMessage = createCustomMessage;
//    }
 }
 
 export default ActionProvider;