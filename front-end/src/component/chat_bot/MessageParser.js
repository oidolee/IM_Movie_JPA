// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)

      const lowercase = message.toLowerCase();
     
      if (lowercase.includes("hello")) {
        this.actionProvider.greet();
      }

      if (lowercase.includes("오늘의 영화는?")) {
        console.log("안녕 입력!");
        this.actionProvider.todayMovies();
      }

     //   actionProvider 답변 컨트롤 가능
      if (lowercase.includes("안녕") || lowercase.includes("안녕2")) {
        // console.log(this.state.movieTitles[1]);
        this.actionProvider.helloWolrdHandler();
      }

      if(lowercase.includes("투두")){
        this.actionProvider.todosHandler();
      }

    //   if (lowercase.includes("javascrpit") || lowercase.includes("js")) {
    //     this.actionProvider.handleJavascriptQuiz();
    //   }
      
    }
  }
  
  export default MessageParser;

