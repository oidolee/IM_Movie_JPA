// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc){
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }


    showTikeckPage = () => {
        const message = this.createChatBotMessage("영화예매는 여기 있습니다.");
        this.addMessageTostate(message);
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

    recommandMovies = () => {
        const message = this.createChatBotMessage("추천영화 알려줍니다.")
        this.setChatbotMessage(message);
    }


    setChatbotMessage = (message) =>{
        this.setState(state => ({ ...state, messages:[...state.messages, message]}))
    }


        
    // }

    //클릭시 나오게 
    tickect_1_answer = () => {
        const message = this.createChatBotMessage(
            "영화 파묘를 추천해 드립니다!",
            {
                widget: "tickect_1_2_Q", // 위젯 설정
            }
        );
    
        this.addMessageToState(message);
    };
    
    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
    


    //클릭시 나오게 
    handlechooseTickeck = () => {
        const message = this.createChatBotMessage(
            "어떤 장를 좋아하세요?",
            {
                widget: "chooseTickeck",
            }
        );

        this.addMessageToState(message);
        };

        addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };
 }
 
 export default ActionProvider;