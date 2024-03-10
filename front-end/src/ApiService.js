import axios from 'axios'; // npm install -f axios@^1.3.5
const SAMPLE_API_BASE_URL = "http://localhost:8081/samples";
const url = "http://localhost:8081";

class ApiService {

    // list
    fetchSamples(){ // 3.
        console.log('fetchSamples() 호출!!')
        return axios.get(SAMPLE_API_BASE_URL); // 스프링부트와 통신
    }


    addSample(inpuData){
        console.log('addSample() 호출!!', inpuData);
        return axios.post(SAMPLE_API_BASE_URL, inpuData);
    }
    // insert

    // 1건 select
    fetchSampleByID(sampleID){
        console.log("fetchSampleByID 호출 !! ", sampleID);
        return axios.get(SAMPLE_API_BASE_URL + "/" + sampleID);
    }

    // update
    editSample(inputData) {
        console.log('editsSample() 호출!!', inputData);
        return axios.put(SAMPLE_API_BASE_URL + "/"+ inputData.id, inputData);
    }

    // delete
    deleteSample(sampleID){
        console.log('editsSample() 호출!!', sampleID);
        return axios.delete(SAMPLE_API_BASE_URL + "/"+ sampleID);
    };

    // page_4
    
    // insert
    addCustomer(inputData) {
        console.log('addCustomer 호출', inputData);
        return axios.post(url + "/index", inputData);
    }

    // 고객리스트
     listCustomer(inputData) {
         console.log('listCustomer 호출');
         return axios.get(url + "/index");
    }

    // 로그인 
    login(inputData) {
        console.log("login start:")
        console.log(inputData)
        return axios.post("http://localhost:8081/index/login", inputData);
    }

    // 아이디 찾기
    findID(inputData) {
        console.log("findID 호출")
        console.log(inputData)
        return axios.post("http://localhost:8081/index/findID", inputData);
    }

    // 비밀번호 찾기
    findPWD(inputData) {
        console.log("findPWD 호출")
        console.log(inputData)
        return axios.post("http://localhost:8081/index/findPWD", inputData);
    } 

}
export default new ApiService();

// - ApiService는 스프링부트 서버(보통 'http://localhost:8080/'으로 열린다.)와 연결해주는 역할을 한다.
// - 리액트에서 무언가 요청을 하면 스프링부트에서 받아 Oracle에서 데이터를 가져오거나 연결해주는 역할을 한다.
// - 전형적인 MVC 패턴이라고 할 수 있다.
// - 리액트에서 이를 구현하기 위해서 Axios를 사용한다. 기존 HTML이나 JSP에서 사용한 AJAX 역할을 한다고 보면 된다.
// npm install -f axios@^1.3.5