import axios from 'axios'; // npm install -f axios@^1.3.5

const localHost = "http://localhost:8081"; // 로컬
const proHost = "http://3.39.155.236:8081"; // 개벌

let serverUrl;

if (process.env.NODE_ENV === 'development') {
  serverUrl = localHost;
} else {
  serverUrl = proHost;
}

console.log("현재 베이스 주소")
console.log(serverUrl)
class ApiService {

    // page_1
    // --------------------------------------------Seat 시작--------------------------------------------
    listSeat() {
        // console.log("listSeat 호출");
        return axios.get(serverUrl + "/page_1/SeatList");
    }

    updateSeat(inputData) {
        console.log("updateSeat 호출", inputData);
        return axios.put(serverUrl + "/page_1/SeatUpdate" + "/" + inputData.st_id, inputData);
    }
    
    selectSeat(st_id) {
        console.log("selectSeat 호출", st_id);
        return axios.get(serverUrl + "/page_1/SeatDetailList" + "/" + st_id);
    }

    // --------------------------------------------Seat 끝--------------------------------------------
    // --------------------------------------------Reservation 시작--------------------------------------------
    // 지역-영화 목록
    listReservation() {
        console.log("listReservation 호출");
        return axios.get(serverUrl + "/page_1/ReservationList");
    }

    // 예약 정보 추가
    addReservation(inputData2) {
        console.log("addReservation 호출", inputData2);
        return axios.post(serverUrl + "/page_1/ReservationInsert", inputData2);
    }
    

    // --------------------------------------------Reservation 끝--------------------------------------------
    // --------------------------------------------Payment 시작--------------------------------------------
    // 결제 정보 저장
    insertPayment(inputData1) {
        console.log("insertPayment 호출", inputData1);
        return axios.post(serverUrl + "/page_1/PaymentInsert", inputData1);
    }

    listPayment(email) {
        console.log("listPayment 호출", email);
        return axios.get(serverUrl + "/page_1/PaymentList/" + email);
    }

    
    // --------------------------------------------Payment 끝--------------------------------------------
    // --------------------------------------------Discount 시작--------------------------------------------
    // 목록
    listDiscount() {
        console.log("listDiscount 호출");
        return axios.get(serverUrl + "/page_1/DiscountList");
    }

    // 등록
    addDiscount(inputData) {
        console.log("addDiscount 호출", inputData);
        return axios.post(serverUrl + "/page_1/DiscountInsert", inputData);
    }

    // 1건조회
    selectDiscount(dc_num) {
        console.log("selectDiscount 호출", dc_num);
        return axios.get(serverUrl + "/page_1/DiscountDetailList" + "/" + dc_num);
    }

    // 수정
    editDiscount(inputData) {
        console.log("editDiscount 호출", inputData);
        return axios.put(serverUrl + "/page_1/DiscountUpdate" + "/" + inputData.dc_num, inputData);
    }  

    // 삭제
    deleteDiscount(dc_num) {
        console.log("deleteDiscount 호출", dc_num);
        return axios.delete(serverUrl + "/page_1/DiscountDelete" + "/" + dc_num);
    }
    // --------------------------------------------Discount 끝--------------------------------------------


    // --------------------------------------------Store 시작----------------------------------------------
    // page3 list
    ListStore_Admin() {
         console.log('storeList 호출');
         return axios.get(serverUrl + "/page_3");
    }

    // page3 insert
    AddStore_Admin(inputData) {
        console.log('AddStore_Admin 호출!!', inputData);
        return axios.post(serverUrl + "/page_3/AddStore_Admin", inputData)
    }

    // page3 1건 select
    fetchStoreByID(sampleID) {
        console.log('page3 fetchSampleByID 호출!!', sampleID);
        return axios.get(serverUrl + "/page_3" + "/EditStore_Admin/" +  sampleID ); // 주의 : "/"+ 
    }

    // page3 update
    EditStore_Admin(inputData) {
        console.log(' AddStore_Admin 호출!!', inputData);
        return axios.put(serverUrl + "/page_3/EditStore_Admin/" + inputData.itemCode, inputData);
    }

    // page3 delete 
    DeleteStore_Admin(sampleID) { 
        console.log('DeleteStore_Admin 호출!!', sampleID);
        return axios.delete(serverUrl + "/page_3/DeleteStore_Admin/" + sampleID);
    }

    // Store Map 시작
    // Store Map list
    ListStore_Map() {
        console.log('storeList 호출');
        return axios.get(serverUrl + "/page_3/EditStore_Admin/ListStore_Map");
   }

       // page3 1건 select
    fetchStoreMapByID(sampleID) {
        console.log('page3 fetchSampleByID 호출!!', sampleID);
        return axios.get(serverUrl + "/page_3/EditStore_Admin" + "/EditStore_Map/" +  sampleID ); // 주의 : "/"+ 
    }

    sendGiftMessage(storedData) {
        console.log('sendGiftMessage 호출!!', storedData);
        return axios.post(serverUrl + "/page_3/Reservation_Payment_Store", storedData)
    }


    addStoreOrderDetail(storedData) {
            console.log('addStoreOrderDetail 호출!!', storedData);
            return axios.post(serverUrl + "/MyPage_Store", storedData)
        }

    addStoreOrder(orderData) {
        console.log('addStoreOrder 호출!!', orderData);
        return axios.post(serverUrl + "/MyPage_Store_Order", orderData)
    }

    // Store Map list
    ListStore_MyPage() {
        console.log('storeList 호출');
        return axios.get(serverUrl + "/MyPage_Store");
    }


    // Store Map 끝
    // --------------------------------------------Store 끝----------------------------------------------

    // page_4
    
    addCustomer(inputData) {
        console.log('addCustomer 호출', inputData);
        return axios.post(serverUrl + "/register", inputData);
    }

    // 고객리스트
     listCustomer(inputData) {
         console.log('listCustomer 호출');
         return axios.get(serverUrl + "/admin/listCustomer");
    }

    // 로그인 
    login(inputData) {
        console.log("login start 로그인:")
        console.log(inputData)
        
        return axios.post(serverUrl + "/login", inputData);
    }

    // 아이디 중복 체크 
    checkDuplicateEmail(id) {
        console.log("이메일 중복 체크")
        console.log("id : " + id)
        return axios.get(serverUrl + "/idCheck", { params: { id } });
    }
    

    // 아이디 찾기
    searchId(inputData) {
        console.log("searchId 호출")
        console.log(inputData)
        return axios.post(serverUrl + "/searchId", inputData);
    }

    // 비밀번호 조회
    findPWD(inputData) {
        console.log("findPWD 호출")
        console.log(inputData)
        return axios.post(serverUrl + "/searchPWD", inputData);
    }

    // 비밀번호 변경
    changePWD(password) {
        console.log("changePWD 호출")
        console.log(" password : " + password)
        return axios.put(serverUrl + "/changePWD", password)
    }

    // page_6
    // 회원정보 조회
    searchCutomer(c_email){
        console.log("searchCutomer 호출")
        return axios.get(serverUrl + "/searchCustomer/" + c_email);
    }

    // 회원정보 수정
    updateCustomer(inputdata){
        console.log("updateCustomer 호출")
        return axios.put(serverUrl + "/updateCustomer" , inputdata);
    }

    // MY 영화관
    // MY 영화관 상세정보
    selectTheater(c_email){
        console.log("selectTheater 호출")
        return axios.get(serverUrl + "/page_6/theater/theaterDetail/" + c_email);
    }

    // MY 영화관 등록하기
    insertTheater(inputData){
        console.log("selectTheater 호출")
        return axios.post(serverUrl + "/page_6/theater/saveTheater" , inputData);
    }
    
    // MY 영화관 수정하기
    updateTheater(inputData){
        console.log("selectTheater 호출")
        console.log('inputData'. inputData);
        return axios.put(serverUrl + "/page_6/theater/updateTheater" , inputData);
    }

    // 관리자
    // 1:1 문의 리스트
    fetchConsult(){
        console.log('fetchConsult() 호출!!')
        return axios.get(serverUrl + '/page_6'); 
    }

    // 고객
    // 1:1 문의 리스트
    fetchConsultCusList(c_email){
        console.log('fetchConsultCusList() 호출!!')
        return axios.get(serverUrl + '/page_6/cusConsultList/' + c_email); 
    }

    // 1:1 문의 상세
    fetchConsultDetail(one_id){
        console.log('fetchConsultDetail() 호출!!')
        return axios.get(serverUrl + '/page_6/select/' + one_id); 
    }

    // 1:1 문의 등록
    addConsult(inputData){
        console.log('addConsult() 호출!!')
        console.log(inputData)
        return axios.post(serverUrl + '/page_6/save', inputData); 
    }

    // 1:1 문의 답변 리스트
    fetchConsultAnswer(one_id){
        console.log('fetchConsultAnswerById() 호출!!')
        
        return axios.get(serverUrl + '/page_6/consultAnswer/'+ one_id); 
    }

    // 1:1 문의 답변 등록
    addConsultAnwser(inputData) {
        console.log('addConsultAnwser 호출', inputData);
        return axios.post(serverUrl + "/page_6/saveAnswer", inputData);
    }

    // 1:1 문의 답변 후 상태 업데이트
    updateConsultData(one_id){
        console.log('updateConsultData 호출');
        return axios.put(serverUrl + "/page_6/completeAnswer/" + one_id);
    }

    
    // 쿠폰
    // 쿠폰 리스트(관리자)
    fetchCoupon(){
        console.log('fetchCoupon() 호출!!')
        return axios.get(serverUrl + '/page_6/coupon/couponList'); 
    }
    
    // 쿠폰 상세내역(관리자)
    couponDetailList(ic_num){
        console.log('couponDetailList() 호출!!')
        return axios.get(serverUrl + '/page_6/coupon/selectCoupon/' + ic_num); 
    }
    // 쿠폰 등록
    addCoupon(inputData){
        console.log('addCoupon() 호출!!')
        console.log(inputData)
        return axios.post(serverUrl + '/page_6/coupon/saveCoupon', inputData); 
    }

    // 쿠폰 수정(관리자)
    updateCoupon(inputData){
        console.log('updateCoupon() 호출!!')
        return axios.put(serverUrl + '/page_6/coupon/updateCoupon', inputData); 
    }
    // 쿠폰 숨김처리(관리자)


    // 쿠폰 삭제(관리자)
    deleteCoupon(ic_num){
        console.log('deleteCoupon() 호출!!')
        return axios.delete(serverUrl + '/page_6/coupon/deleteCoupon/' + ic_num); 
    }

    // 고객 쿠폰
    // 고객 쿠폰 등록
    addCusCoupon(inputData){
        console.log('addCusCoupon() 호출!!')
        return axios.post(serverUrl + '/page_6/coupon/saveCusCoupon', inputData);
    }

    // 고객 쿠폰 리스트
    fetchCusCouponCus(c_email){
        console.log('fetchCouponCus() 호출!!')
        return axios.get(serverUrl + '/page_6/coupon/couponCusList/' + c_email); 
    }

    // 고객 쿠폰 삭제(숨김처리)
    deleteCusCoupon(ic_num){
        console.log('deleteCusCoupon() 호출!!')
        return axios.put(serverUrl + '/page_6/coupon/deleteCusCoupon/' + ic_num);
    }

    // 고객 쿠폰 갯수
    countCusCoupon(c_email){
        console.log('countCusCoupon() 호출!!')
        return axios.get(serverUrl + '/page_6/coupon/couponCusCount/' + c_email);
    }

    // 고객 쿠폰 상세내역
    cusCouponDetail(ic_num){
        console.log('cusCouponDetail() 호출!!')
        return axios.get(serverUrl + '/page_6/coupon/couponCusDetail/' + ic_num);
        
    }
    

    // <page_2 주차 리스트 불러옴>
    parkingList(){
        console.log('parkingList() 호출!!')
        return axios.get(serverUrl + '/page_2/ParkingList'); 
    }

    // <page_2 주차등록>
    editPark(inputData){
        console.log('editPark() 주차등록시작');
        console.log(inputData);
        return axios.put(serverUrl + '/page_2/save/'+inputData.ip_no, inputData); 
    }

    //주차 삭제
    parkDelete(inputData){
        console.log('parkDelete() 호출!!')
        return axios.put(serverUrl + '/page_2/delete/'+inputData.ip_no, inputData); 
    }

      // <page_2 관리자에서 멤버리스트 차트용 >
    customerList(){
        console.log('customerList() 호출!!')
        return axios.get(serverUrl + '/admin/listCustomer'); 
    }

    selectCoupon(ic_code){
        console.log('selectCoupon() 호출!!')
        let goUrl = serverUrl + '/page_2/selectCoupon/'+ic_code
        console.log(goUrl);
        return axios.get(goUrl); 
    }

    // page_5
    //영화 홈 목록 리스트
    fetchMovie(){
        console.log('movieList() 호출!!')
        return axios.get(serverUrl + '/page_5/movieList'); 
    }

     // page_5
    //영화 현재목록 리스트
    fetchMovie1(){
        console.log('nowMovieList() 호출!!')
        return axios.get(serverUrl + '/page_5/nowMovieList'); 
    }

    // page_5
    //영화 새목록 리스트
    fetchMovie2(){
        console.log('nextMovieList() 호출!!')
        return axios.get(serverUrl + '/page_5/nextMovieList'); 
    }

    // page_5
    //영화 아르떼목록 리스트
    fetchMovie3(){
        console.log('arteMovieList() 호출!!')
        return axios.get(serverUrl + '/page_5/arteMovieList'); 
    }

    // 관리자
    // 목록
    listUpdate() {
        console.log("listUpdate 호출");
        return axios.get(serverUrl + "/page_5/UpdateList");
    }

    //영화 추가
    addUpdate(inputData) {
        console.log("addUpdate 호출", inputData);
        return axios.post(serverUrl + "/page_5/UpdateInsert", inputData);
    }

    // 1건조회
    selectUpdate(movie_id) {
        console.log("selectUpdate 호출", movie_id);
        return axios.get(serverUrl + "/page_5/MovieDetailList/" + movie_id);
    }

    // 영화수정
    editUpdate(inputData) {
        console.log("editUpdate 호출", inputData);
        return axios.put(serverUrl + "/page_5/UpdateUpdate" + "/" + inputData.movie_id, inputData);
    }  

    // 영화삭제
    deleteUpdate(movie_id) {
        console.log("deleteUpdate 호출", movie_id);
        return axios.delete(serverUrl + "/page_5/UpdateDelete" + "/" + movie_id);
    }

    
    // 현재목록
    listNow() {
        console.log("listNow 호출");
        return axios.get(serverUrl + "/page_5/NowList");
    }

    //영화 현재 추가
    addNow(inputData) {
        console.log("addNow 호출", inputData);
        return axios.post(serverUrl + "/page_5/NowInsert", inputData);
    }

    // 현재1건조회
    selectNow(now_id) {
        console.log("selectNow 호출", now_id);
        return axios.get(serverUrl + "/page_5/NowDetailList/"+ now_id);
    }

    // 영화 현재수정
    editNow(inputData) {
        console.log("editNow 호출", inputData);
        return axios.put(serverUrl + "/page_5/NowUpdate" + "/" + inputData.now_id, inputData);
    }  

    // 영화 현재 삭제
    deleteNext(now_id) {
        console.log("deleteNext 호출", now_id);
        return axios.delete(serverUrl + "/page_5/NextDelete" + "/" + now_id);
    }
    
    // 새목록
    listNext() {
        console.log("listNext 호출");
        return axios.get(serverUrl + "/page_5/NextList");
    }

    //영화 새 추가
    addNext(inputData) {
        console.log("addNext 호출", inputData);
        return axios.post(serverUrl + "/page_5/NextInsert", inputData);
    }

    // 새1건조회
    selectNext(next_id) {
        console.log("selectNext 호출", next_id);
        return axios.get(serverUrl + "/page_5/NextDetailList" + "/" + next_id);
    }

    // 영화 새수정
    editNext(inputData) {
        console.log("editNext 호출", inputData);
        return axios.put(serverUrl + "/page_5/NextUpdate" + "/" + inputData.next_id, inputData);
    }  

    // 영화 새 삭제
    deleteNext(next_id) {
        console.log("deleteNext 호출", next_id);
        return axios.delete(serverUrl + "/page_5/NextDelete" + "/" + next_id);
    }


    // 아르떼목록
    listArte() {
        console.log("listArte 호출");
        return axios.get(serverUrl + "/page_5/ArteList");
    }

    //영화 아르떼 추가
    addArte(inputData) {
        console.log("addArte 호출", inputData);
        return axios.post(serverUrl + "/page_5/ArteInsert", inputData);
    }

    // 아르떼1건조회
    selectArte(arte_id) {
        console.log("selectArte 호출", arte_id);
        return axios.get(serverUrl + "/page_5/ArteDetailList" + "/" + arte_id);
    }

    // 영화 아르떼수정
    editArte(inputData) {
        console.log("editArte 호출", inputData);
        return axios.put(serverUrl + "/page_5/ArteUpdate" + "/" + inputData.arte_id, inputData);
    }  

    // 영화 아르떼 삭제
    deleteArte(arte_id) {
        console.log("deleteNext 호출", arte_id);
        return axios.delete(serverUrl + "/page_5/ArteDelete" + "/" + arte_id);
    }

    addReview(inputData){
        console.log('addReview() review등록시작');
        console.log(inputData);
        return axios.post(serverUrl + '/page_5/review/addReview', inputData); 
    }

    reviewList(movie_id){
        console.log('reviewList() 시작');
        let go_Url = serverUrl + '/page_5/review/reviewList/'+movie_id;
        console.log("go_Url");
        console.log(go_Url);
        return axios.get(go_Url); 
    }

    //상영시간표 리스트
    fetchtime1(){
        console.log('timeList() 호출!!')
        return axios.get(serverUrl + '/page_5/timeList'); 
    }

    reloadTimeList(inputData){
        console.log('reloadTimeList() 호출!!',inputData)
        return axios.post(serverUrl + '/page_5/timeLists/', inputData); 
    }

    getLocation(place_num){
        console.log('getLocation() 호출!!',place_num)
        return axios.get(serverUrl + '/page_5/getLocation/' +place_num ); 
    }

    //공지사항 리스트
    noticeList(){
        console.log('noticeList() 호출!!')
        return axios.get(serverUrl + '/page_5/NoticeList'); 
    }

    addNotice(inputData){
        console.log('addNotice() 호출!!',inputData)
        return axios.post(serverUrl + '/page_5/NoticeInsert',inputData); 
    }

    
     selectNotice(notice_num) {
        console.log("selectUpdate 호출", notice_num);
        return axios.get(serverUrl + "/page_5/getNoticeDetail/" + notice_num);
    }

    
    editNotice(inputData) {
        console.log("editNotice 호출", inputData);
        return axios.put(serverUrl + "/page_5/NoticeUpdate" + "/" + inputData.notice_num, inputData);
    }  

    
    noticeDelete(notice_num) {
        console.log("noticeDelete 호출", notice_num);
        return axios.delete(serverUrl + "/page_5/NoticeDelete" + "/" + notice_num);
    }

    //단체대관 리스트
    groupList(){
        console.log('groupList() 호출!!')
        return axios.get(serverUrl + '/page_5/GroupList' ); 
    }

    groupAdd(inputData) {
        console.log("groupAdd 호출", inputData);
        return axios.post(serverUrl + "/page_5/GroupInsert", inputData);
    }

    // 고객
    //  대관 문의 리스트
    GroupCusList(c_email){
        console.log('GroupCusList() 호출!!')
        return axios.get(serverUrl + '/page_5/cusGroupList/' + c_email); 
    }

     // 대관 문의 상세
     groupDetail(group_id){
        console.log('groupDetail() 호출!!')
        return axios.get(serverUrl + '/page_5/select/' + group_id); 
    }

    // 대관 문의  답변 등록
    addgroupAnwser(inputData) {
        console.log('addgroupAnwser 호출', inputData);
        return axios.post(serverUrl + "/page_5/saveAnswer", inputData);
    }

     // 대관 문의  답변 후 상태 업데이트
     updategroupData(group_id){
        console.log('updategroupData 호출');
        return axios.put(serverUrl + "/page_5/completeGroupAnswer/" + group_id);
    }

    
    // 대관 문의  답변 리스트
    GroupAnswer(group_id){
        console.log('GroupAnswer() 호출!!')
        
        return axios.get(serverUrl + '/page_5/groupAnswer/'+ group_id); 
    }

   
   

    


    // selectGroup(group_id) {
    //     console.log("selectGroup 호출", group_id);
    //     return axios.get(serverUrl + "/page_5/getNoticeDetail/" + notice_num);
    // }

    // groupDelete(group_id) {
    //     console.log("groupDelete 호출", group_id);
    //     return axios.delete(serverUrl + "/page_5/NoticeDelete" + "/" + notice_num);
    // }

    




    
      
    


}
export default new ApiService();

// - ApiService는 스프링부트 서버(보통 'http://localhost:8080/'으로 열린다.)와 연결해주는 역할을 한다.
// - 리액트에서 무언가 요청을 하면 스프링부트에서 받아 Oracle에서 데이터를 가져오거나 연결해주는 역할을 한다.
// - 전형적인 MVC 패턴이라고 할 수 있다.
// - 리액트에서 이를 구현하기 위해서 Axios를 사용한다. 기존 HTML이나 JSP에서 사용한 AJAX 역할을 한다고 보면 된다.
// npm install -f axios@^1.3.5