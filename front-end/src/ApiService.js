import axios from 'axios'; // npm install -f axios@^1.3.5
const SAMPLE_API_BASE_URL = "http://localhost:8081/samples";
let url = "http://localhost:8081";

class ApiService {

    // page_1
    // --------------------------------------------Payment 시작--------------------------------------------

    // --------------------------------------------Payment 끝--------------------------------------------

    // --------------------------------------------Discount 시작--------------------------------------------
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

    // 1건조회
    selectDiscount(dc_num) {
        console.log("selectDiscount 호출", dc_num);
        return axios.get(url + "/page_1/DiscountDetailList" + "/" + dc_num);
    }

    // 수정
    editDiscount(inputData) {
        console.log("editDiscount 호출", inputData);
        return axios.put(url + "/page_1/DiscountUpdate" + "/" + inputData.dc_num, inputData);
    }  

    // 삭제
    deleteDiscount(dc_num) {
        console.log("deleteDiscount 호출", dc_num);
        return axios.delete(url + "/page_1/DiscountDelete" + "/" + dc_num);
    }
    // --------------------------------------------Discount 끝--------------------------------------------

    // page3 list
    ListStore_Admin() {
         console.log('storeList 호출');
         return axios.get(url + "/page_3");
    }

    // page3 insert
    AddStore_Admin(inputData) {
        console.log('AddStore_Admin 호출!!', inputData);
        return axios.post(url + "/page_3/AddStore_Admin", inputData)
    }

    // page3 1건 select
    fetchStoreByID(sampleID) {
        console.log('page3 fetchSampleByID 호출!!', sampleID);
        return axios.get(url + "/page_3" + "/EditStore_Admin/" +  sampleID ); // 주의 : "/"+ 
    }

    // page3 update
    EditStore_Admin(inputData) {
        console.log(' AddStore_Admin 호출!!', inputData);
        return axios.put(url + "/page_3/EditStore_Admin/" + inputData.itemCode, inputData);
    }

    // page3 delete 
    DeleteStore_Admin(sampleID) { 
        console.log('DeleteStore_Admin 호출!!', sampleID);
        return axios.delete(url + "/page_3/DeleteStore_Admin/" + sampleID);
    }

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

    // 1:1 문의 상세
    fetchConsultDetail(one_id){
        console.log('fetchConsultDetail() 호출!!')
        return axios.get(url + '/page_6/select/' + one_id); 
    }

    // 1:1 문의 등록
    addConsult(inputData){
        console.log('addConsult() 호출!!')
        console.log(inputData)
        return axios.post(url + '/page_6/save', inputData); 
    }

    // 1:1 문의 답변
    fetchConsultAnswer(one_id){
        console.log('fetchConsultAnswerById() 호출!!')
        
        return axios.get(url + '/page_6/select'+ one_id); 
    }


    

}
export default new ApiService();

// - ApiService는 스프링부트 서버(보통 'http://localhost:8080/'으로 열린다.)와 연결해주는 역할을 한다.
// - 리액트에서 무언가 요청을 하면 스프링부트에서 받아 Oracle에서 데이터를 가져오거나 연결해주는 역할을 한다.
// - 전형적인 MVC 패턴이라고 할 수 있다.
// - 리액트에서 이를 구현하기 위해서 Axios를 사용한다. 기존 HTML이나 JSP에서 사용한 AJAX 역할을 한다고 보면 된다.
// npm install -f axios@^1.3.5