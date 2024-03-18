import axios from 'axios'; // npm install -f axios@^1.3.5
const SAMPLE_API_BASE_URL = "http://localhost:8081/samples";
let url = "http://localhost:8081";

class ApiService {

    // page_1
    // --------------------------------------------Seat 시작--------------------------------------------
    listSeat() {
        console.log("listSeat 호출");
        return axios.get(url + "/page_1/SeatList");
    }

    updateSeat(inputData) {
        console.log("updateSeat 호출", inputData);
        return axios.put(url + "/page_1/SeatUpdate" + "/" + inputData.st_id, inputData);
    }
    
    // --------------------------------------------Seat 끝--------------------------------------------
    

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


    // --------------------------------------------Store 시작----------------------------------------------
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

    // Store Map 시작
    // Store Map list
    ListStore_Map() {
        console.log('storeList 호출');
        return axios.get(url + "/page_3/EditStore_Admin/ListStore_Map");
   }

       // page3 1건 select
    fetchStoreMapByID(sampleID) {
        console.log('page3 fetchSampleByID 호출!!', sampleID);
        return axios.get(url + "/page_3/EditStore_Admin" + "/EditStore_Map/" +  sampleID ); // 주의 : "/"+ 
    }

    // Store Map 끝
    // --------------------------------------------Store 끝----------------------------------------------

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

    // 1:1 문의 답변 리스트
    fetchConsultAnswer(one_id){
        console.log('fetchConsultAnswerById() 호출!!')
        
        return axios.get(url + '/page_6/consultAnswer/'+ one_id); 
    }

    // 1:1 문의 답변 등록
    addConsultAnwser(inputData) {
        console.log('addConsultAnwser 호출', inputData);
        return axios.post(url + "/page_6/saveAnswer", inputData);
    }

    // 쿠폰
    // 쿠폰 리스트(관리자)
    fetchCoupon(){
        console.log('fetchCoupon() 호출!!')
        return axios.get(url + '/page_6/coupon'); 
    }
    
    // 쿠폰 상세내역(관리자)
    couponList(ic_name){
        console.log('couponList() 호출!!')
        return axios.get(url + '/page_6/coupon/' + ic_name); 
    }
    // 쿠폰 등록
    addCoupon(inputData){
        console.log('addCoupon() 호출!!')
        return axios.post(url + '/page_6/coupon/saveCoupon', inputData); 
    }

    // 쿠폰 수정(관리자)
    updateCoupon(inputData){
        console.log('updateCoupon() 호출!!')
        return axios.post(url + '/page_6/coupon/updateCoupon', inputData); 
    }
    // 쿠폰 숨김처리(관리자)


    // 쿠폰 삭제(관리자)
    deleteCoupon(ic_name){
        console.log('updateCoupon() 호출!!')
        return axios.delete(url + '/page_6/coupon/deleteCoupon/' + ic_name); 
    }

    // 고객 쿠폰
    // 고객 쿠폰 등록
    addCusCoupon(inputData){
        console.log('addCusCoupon() 호출!!')
        return axios.post(url + '/page_6/coupon/saveCusCoupon', inputData);
    }

    // 고객 쿠폰 리스트
    fetchCusCouponCus(c_email){
        console.log('fetchCouponCus() 호출!!')
        return axios.get(url + '/page_6/coupon/couponCusList/' + c_email); 
    }

    // 고객 쿠폰 삭제(숨김처리)
    deleteCusCoupon(ic_num){
        console.log('deleteCusCoupon() 호출!!')
        return axios.put(url + '/page_6/coupon/deleteCusCoupon' + ic_num);
    }

    // 고객 쿠폰 갯수
    countCusCoupon(c_email){
        console.log('countCusCoupon() 호출!!')
        return axios.get(url + '/page_6/coupon/couponCusCount/' + c_email);
    }
    

    // <page_2 주차 리스트 불러옴>
    parkingList(){
        console.log('parkingList() 호출!!')
        return axios.get(url + '/page_2/ParkingList'); 
    }

    // <page_2 주차등록>
    editPark(inputData){
        console.log('editPark() 주차등록시작');
        console.log(inputData);
        return axios.put(url + '/page_2/save/'+inputData.ip_no, inputData); 
    }


      // <page_2 관리자에서 멤버리스트 차트용 >
    customerList(){
        console.log('customerList() 호출!!')
        return axios.get(url + '/index'); 
    }

    // page_5
    //영화 홈 목록 리스트
    fetchMovie(){
        console.log('movieList() 호출!!')
        return axios.get(url + '/page_5/movieList'); 
    }

     // page_5
    //영화 현재목록 리스트
    fetchMovie1(){
        console.log('nowMovieList() 호출!!')
        return axios.get(url + '/page_5/nowMovieList'); 
    }

    // page_5
    //영화 새목록 리스트
    fetchMovie2(){
        console.log('nextMovieList() 호출!!')
        return axios.get(url + '/page_5/nextMovieList'); 
    }

    // page_5
    //영화 아르떼목록 리스트
    fetchMovie3(){
        console.log('arteMovieList() 호출!!')
        return axios.get(url + '/page_5/arteMovieList'); 
    }

    // 관리자
    // 목록
    listUpdate() {
        console.log("listUpdate 호출");
        return axios.get(url + "/page_5/UpdateList");
    }

    //영화 추가
    addUpdate(inputData) {
        console.log("addUpdate 호출", inputData);
        return axios.post(url + "/page_5/UpdateInsert", inputData);
    }

    // 1건조회
    selectUpdate(mov_id) {
        console.log("selectUpdate 호출", mov_id);
        return axios.get(url + "/page_5/MovieDetailList" + "/" + mov_id);
    }

    // 영화수정
    editUpdate(inputData) {
        console.log("editUpdate 호출", inputData);
        return axios.put(url + "/page_5/UpdateUpdate" + "/" + inputData.mov_id, inputData);
    }  

    // 영화삭제
    deleteUpdate(mov_id) {
        console.log("deleteUpdate 호출", mov_id);
        return axios.delete(url + "/page_5/UpdateDelete" + "/" + mov_id);
    }

    
    // 현재목록
    listNow() {
        console.log("listNow 호출");
        return axios.get(url + "/page_5/NowList");
    }

    //영화 현재 추가
    addNow(inputData) {
        console.log("addNow 호출", inputData);
        return axios.post(url + "/page_5/NowInsert", inputData);
    }

    // 현재1건조회
    selectNow(now_id) {
        console.log("selectNow 호출", now_id);
        return axios.get(url + "/page_5/NowDetailList" + "/" + now_id);
    }

    // 영화 현재수정
    editNow(inputData) {
        console.log("editNow 호출", inputData);
        return axios.put(url + "/page_5/NowUpdate" + "/" + inputData.now_id, inputData);
    }  

    // 영화 현재 삭제
    deleteNext(now_id) {
        console.log("deleteNext 호출", now_id);
        return axios.delete(url + "/page_5/NextDelete" + "/" + now_id);
    }
    
    // 새목록
    listNext() {
        console.log("listNext 호출");
        return axios.get(url + "/page_5/NextList");
    }

    //영화 새 추가
    addNext(inputData) {
        console.log("addNext 호출", inputData);
        return axios.post(url + "/page_5/NextInsert", inputData);
    }

    // 새1건조회
    selectNext(next_id) {
        console.log("selectNext 호출", next_id);
        return axios.get(url + "/page_5/NextDetailList" + "/" + next_id);
    }

    // 영화 새수정
    editNext(inputData) {
        console.log("editNext 호출", inputData);
        return axios.put(url + "/page_5/NextUpdate" + "/" + inputData.next_id, inputData);
    }  

    // 영화 새 삭제
    deleteNext(next_id) {
        console.log("deleteNext 호출", next_id);
        return axios.delete(url + "/page_5/NextDelete" + "/" + next_id);
    }


}
export default new ApiService();

// - ApiService는 스프링부트 서버(보통 'http://localhost:8080/'으로 열린다.)와 연결해주는 역할을 한다.
// - 리액트에서 무언가 요청을 하면 스프링부트에서 받아 Oracle에서 데이터를 가져오거나 연결해주는 역할을 한다.
// - 전형적인 MVC 패턴이라고 할 수 있다.
// - 리액트에서 이를 구현하기 위해서 Axios를 사용한다. 기존 HTML이나 JSP에서 사용한 AJAX 역할을 한다고 보면 된다.
// npm install -f axios@^1.3.5