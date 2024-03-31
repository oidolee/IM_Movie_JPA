import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' // npm install react-router-dom@5

//sample
import AddSampleComponent from "../sample/AddSampleComponent";
import ListSampleComponent from "../sample/ListSampleComponent";
import EditSampleComponent from "../sample/EditSampleComponent";


//main
import MainBody from '../main/MainBody';
import Header from '../../component/route/Header';
import Footer from '../main/Footer';

//page_1
import Reservation_Movie from '../page_1/Reservation_Movie';
import Reservation_Seat from '../page_1/Reservation_Seat';
import Reservation_Payment from '../page_1/Reservation_Payment';
import Reservation_Movie_screen from '../page_1/Reservation_Movie_screen';
import Discount from '../page_1/Discount';
import success from '../page_1/success';

//page_2
import Page2 from '../page_2/Page2';
import Parking from '../page_2/Parking';

//chat_bot
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import Config from "../chat_bot/ChatbotConfig"; // chat_bot 시작은 여기서 부터
import MessageParser from "../chat_bot/MessageParser";
import ActionProvider from "../chat_bot/ActionProvider";

//page_3
import Page3 from '../page_3/Page3';
import StoreDetail from '../page_3/StoreDetail';
import StoreTicket from '../page_3/StoreTicket';
import Reservation_Payment_Store from '../page_3/Reservation_Payment_Store';
import Store_Payment_Finish from '../page_3/Store_Payment_Finish';
import MyPage_Store from '../page_6/store_page_3/MyPage_Store';

//page_4
import singupComponent from '../page_4/singupComponent';
import loginComponent from '../page_4/loginComponent';
import signupCheck from '../page_4/signupCheck';
import searchID from '../page_4/searchID';
import resultFindID from '../page_4/resultFindID';
import searchPWD from '../page_4/searchPWD';
import resultFindPWD from '../page_4/resultFindPWD';
import OAuthResponseHandler from '../page_4/OAuthResponseHandler';

//page_5
import movieMain from '../page_5/movie/movieMain';
import movieDetail from '../page_5/movie/movieDetail';
import movieDetail2 from '../page_5/movie/movieDetail2';
import movieDetail3 from '../page_5/movie/movieDetail3';
import movieDetail4 from '../page_5/movie/movieDetail4';
import movieUpdate from '../../admin/page_5/Admin_Update_Add';
import movieNow from '../page_5/movie/movieNow';
import movieNext from '../page_5/movie/movieNext';
import arte from '../page_5/movie/arte';
import gasan from '../page_5/theater/gasan';
import FAQ from '../page_5/board/FAQ';
import NOTICE from '../page_5/board/NOTICE';
import NOTICE2 from '../page_5/board/NOTICE2';
import groupform from '../page_5/board/groupform';



//page_6
import MyPage from '../page_6/MyPage';
import MyPage_res from '../page_6/reservation/MyPage_res';
import MyPage_resCancle from '../page_6/reservation/MyPage_resCancle';
import MyPage_coupon from '../page_6/coupon/MyPage_coupon';
import MyPage_wishMovie from '../page_6/movielog/MyPage_wishMovie';
import Consult from '../page_6/consult/Consult';
import MyPage_myinfo from '../page_6/myinfo/MyPage_myinfo';
import MyPage_myinfo_update from '../page_6/myinfo/MyPage_myinfo_update';
import MyPage_consult_list from '../page_6/myinfo/MyPage_consult_list'; 
import MyPage_consult_list2 from '../page_6/myinfo/MyPage_consult_list2';
import MyPage_Event from '../page_6/event/MyPage_Event';
import Event_Home from '../page_6/event/Event_Home';
import MypageConsultDetail from '../page_6/myinfo/MyPage_consult_answer';
import MypageConsultDetail2 from '../page_6/myinfo/MyPage_consult_answer2';
import Event_coupon from '../page_6/event/Event_coupon';
import Event_coupon_detail from '../page_6/event/Event_coupon_detail';



// import Admin_main from '../../admin/main/Admin_main'


const AppRouter = () => {

    return(
        <div>
            <BrowserRouter>
                    <div style={style}>
                        <Route>
                        <Chatbot
                            style={{ width: '500px' }}
                            config={Config}
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                        />
                            <Header />  
                            <Route path="/" exact={true} component={MainBody} />
                            {/* page_1 */}
                            <Route>
                                <Route path="/page_1/Reservation_Movie" exact={true} component={Reservation_Movie} />
                                <Route path="/page_1/Reservation_Seat" exact={true} component={Reservation_Seat} />
                                <Route path="/page_1/Reservation_Payment" exact={true} component={Reservation_Payment} />
                                <Route path="/page_1/Reservation_Movie_screen" exact={true} component={Reservation_Movie_screen} />
                                <Route path="/page_1/Discount" exact={true} component={Discount} />                       
                                <Route path="/success" exact={true} component={success} />
                            </Route>

                            {/* page_2 */}
                            <Route>
                                <Route path="/page_2" exact={true} component={Page2} />
                                <Route path="/parking" exact={true} component={Parking} />
                                
                            </Route>

                            {/* page_3 */}
                            <Route>
                                <Route path="/Page3" exact={true} component={Page3} />
                                <Route path="/page_3/EditStore_Admin/" exact={true} component={StoreDetail} />
                                <Route path="/page_3/StoreTicket/" exact={true} component={StoreTicket} />
                                <Route path="/page_3/Reservation_Payment_Store/" exact={true} component={Reservation_Payment_Store} />
                                <Route path="/page_3/Store_Payment_Finish/" exact={true} component={Store_Payment_Finish} />                          
                                <Route path="/MyPage_Store" exact={true} component={MyPage_Store} />
                            </Route>

                            {/* page_4 */}
                            <Route>
                                <Route path="/login" exact={true} component={loginComponent} />
                                <Route path="/sign-up" exact={true} component={singupComponent} />
                                <Route path="/signCheck" exact={true} component={signupCheck} />
                               
                                <Route path="/searchID" exact={true} component={searchID} />
                                <Route path="/findID" exact={true} component={resultFindID} />
                                <Route path="/searchPWD" exact={true} component={searchPWD} />
                                <Route path="/findPWD" exact={true} component={resultFindPWD} />

                                <Route path="/auth/oauth-response/:token/:expirationTime" component={OAuthResponseHandler} />
                                
                            </Route>
                        
                            {/* page_5 */}
                            <Route>
                                <Route path="/movieMain" exact={true} component={movieMain} />
                                <Route path="/movieDetail/:movie_id" exact={true} component={movieDetail} />
                                <Route path="/movieDetail2/:now_id" exact={true} component={movieDetail2} />
                                <Route path="/movieDetail3/:arte_id" exact={true} component={movieDetail3} />
                                <Route path="/movieDetail4/:next_id" exact={true} component={movieDetail4} />
                                <Route path="/movieUpdate" exact={true} component={movieUpdate} />
                                <Route path="/movieNow" exact={true} component={movieNow} />
                                <Route path="/movieNext" exact={true} component={movieNext} />
                                <Route path="/arte" exact={true} component={arte} />
                                <Route path="/theater/:place_num" exact={true} component={gasan} />
                                <Route path="/FAQ" exact={true} component={FAQ} />
                                <Route path="/NOTICE" exact={true} component={NOTICE} />
                                <Route path="/NOTICE2/:notice_num" exact={true} component={NOTICE2} />
                                <Route path="/groupform" exact={true} component={groupform} />
                                
                            
                            </Route>

                    
                             {/* page_6 */}
                             <Route>
                                <Route path="/MyPage" exact={true} component={MyPage} />
                                <Route path="/MyPage_res" exact={true} component={MyPage_res} />
                                <Route path="/MyPage_resCancle" exact={true} component={MyPage_resCancle} />
                                <Route path="/MyPage_coupon" exact={true} component={MyPage_coupon} />
                                <Route path="/MyPage_wishMovie" exact={true} component={MyPage_wishMovie} />
                                <Route path="/Consult" exact={true} component={Consult} />
                                <Route path="/MyPage_myinfo" exact={true} component={MyPage_myinfo} />
                                <Route path="/MyPage_myinfo_update" exact={true} component={MyPage_myinfo_update} />
                                <Route path="/MyPage_consult_list" exact={true} component={MyPage_consult_list} />
                                <Route path="/MyPage_consult_list2" exact={true} component={MyPage_consult_list2} />
                                <Route path="/event_Home" exact={true} component={Event_Home} />
                                <Route path="/MyPage_Event" exact={true} component={MyPage_Event} />
                                <Route path="/MyPage_consult_answer/:one_id" exact={true} component={MypageConsultDetail} />
                                <Route path="/MyPage_consult_answer_2/:group_id" exact={true} component={MypageConsultDetail2} />
                                <Route path="/Event_coupon/" exact={true} component={Event_coupon} />
                                <Route path="/Event_coupon_detail/:ic_num" exact={true} component={Event_coupon_detail} />
                                
                            </Route>
                            


                        </Route>
                        {/* 영화관 마지막 라우터 */}

                        {/* 관리자 시작  */}
                        {/* <Route>
                            <Route path="/admin" exact={true} component={Admin_main} />
                        </Route> */}
                        {/* 관리자 끝  */}

                        {/* sample */}
                        <Route>
                            <Route path="/add-sample" exact={true} component={AddSampleComponent} />
                            <Route path="/samples" exact={true} component={ListSampleComponent} />
                            <Route path="/edit-sample" exact={true} component={EditSampleComponent} />
                        </Route>
                    </div>


                <Footer /> 
            </BrowserRouter>
        </div>
    )
}

const style = {
}



export default AppRouter