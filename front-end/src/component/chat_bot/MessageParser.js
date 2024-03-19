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

      if (lowercase.includes("영화")) {
        this.actionProvider.todayMovies();
      }

      if (lowercase.includes("추천")) {
        this.actionProvider.recommandMovies();
      }

     //   actionProvider 답변 컨트롤 가능
      if (lowercase.includes("안녕") || lowercase.includes("반가워") || lowercase.includes("hi")) {
        this.actionProvider.helloWolrdHandler();
      }

      if(lowercase.includes("투두")){
        this.actionProvider.todosHandler();
      }

      if (lowercase.includes("javascript") || lowercase.includes("js")) {
        this.actionProvider.handlechooseTickeck();
      }
      
    }
  }
  
  export default MessageParser;

