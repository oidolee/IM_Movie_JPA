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


    // 기존 기본 테스트 
    helloWolrdHandler = () => {
        const message = this.createChatBotMessage("안녕하세요? \n저는 IM 챗봇입니다. \n 무엇을 도와드릴까요?")
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
        const message = this.createChatBotMessage("추천장르 알려줍니다.",
            {
                widget: "chooseTickeck"
            }
        )
        
        this.setChatbotMessage(message);
    }


    setChatbotMessage = (message) =>{
        this.setState(state => ({ ...state, messages:[...state.messages, message]}))
    }
    //처음 부분 3가지



    movieNews = () => {
        const message = this.createChatBotMessage(
            "영화 소개를 해드릴게요!",
            {
                widget: "goMovieHome", // 위젯 설정
            }
        );
        this.addMessageToState(message);
    }

    // 영화소개     
    goHome = () => {
        const message = this.createChatBotMessage(
            "다시 선택해주세요!",
            {
                widget: "options", // 위젯 설정
            }
        );
        this.addMessageToState(message);
    }

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

    tickect_2_answer = () => {
        const message = this.createChatBotMessage(
            "밥 말리 원러브를 추천해 드립니다!",
            {
                widget: "tickect_1_2_Q", // 위젯 설정
            }
        );
    
        this.addMessageToState(message);
    };

    tickect_3_answer = () => {
        const message = this.createChatBotMessage(
            "돌고래 밸루를 추천해 드립니다!",
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