import axios from 'axios'; // npm install -f axios@^1.3.5
const SAMPLE_API_BASE_URL = "http://localhost:8081/samples";
let url = "http://localhost:8081";

class ApiService {

    // page_1
    // 목록
    listDiscount() {
        console.log("listDiscount 호출");
        return axios.get(url + "/page_1/DiscountList");
    }

    // 등록
    addDiscount(inputData) {
        console.log("addDiscount 호출", inputData);
        return axios.post(url + "/page_1/DiscountInsert", inputData);
    }

    //page_3
    ListStore_Admin() {
         console.log('ListStore_Admin 호출');
         return axios.get(url + "/page_3/ListStore_Admin");
    }

    // ListStore_Admin(inputData) {
    //     console.log('ListStore_Admin 호출', inputData);
    //     return axios.get(url + "/page_3", inputData)
    //         .then(response => {
    //             console.log('ListStore_Admin 응답 데이터:', response.data);
    //             return response.data;  // 받아온 데이터 반환
    //         })
    //         .catch(error => {
    //             console.error('ListStore_Admin 에러:', error);
    //             throw error;  // 에러를 다시 던져서 상위 컴포넌트에서 처리하도록 함
    //         });
    // }

    // page_4
    
    // insert
    addCustomer(inputData) {
        console.log('addCustomer 호출', inputData);
        return axios.post(url + "/index/save", inputData);
    }

    // 고객리스트
     listCustomer(inputData) {
         console.log('listCustomer 호출');
         return axios.get(url + "/index");
    }

    // 로그인 
    login(inputData) {
        console.log("login start 로그인:")
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
        return axios.post("http://localhost:8081/index/searchPWD", inputData);
    }

    // page_6

    // 1:1 문의 리스트
    fetchConsult(){
        console.log('fetchConsult() 호출!!')
        return axios.get(url + '/page_6'); 
    }

    // 1:1 문의 등록
    addConsult(inputData){
        console.log('addConsult() 호출!!')
        console.log(inputData)
        return axios.post(url + '/page_6/save', inputData); 
    }

    

}
export default new ApiService();

// - ApiService는 스프링부트 서버(보통 'http://localhost:8080/'으로 열린다.)와 연결해주는 역할을 한다.
// - 리액트에서 무언가 요청을 하면 스프링부트에서 받아 Oracle에서 데이터를 가져오거나 연결해주는 역할을 한다.
// - 전형적인 MVC 패턴이라고 할 수 있다.
// - 리액트에서 이를 구현하기 위해서 Axios를 사용한다. 기존 HTML이나 JSP에서 사용한 AJAX 역할을 한다고 보면 된다.
// npm install -f axios@^1.3.5