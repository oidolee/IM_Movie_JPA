
import React, {Component} from 'react';
import style from '../../../styles/page_6/Mypage.module.css'
import Mypage_mid_nav from '../Mypage_mid_nav'
import MyPage_top from '../MyPage_top'
import MyPage_myinfo_update_part from './MyPage_myinfo_update_part'
class MyPage_myinfo_update extends Component{
    render(){
        return(
            <div>
               <div id="contents" className={`mypage_area_movingbar ${style.mypage_area_movingbar}`}>
                    {/* 마이페이지 공통부분 */}
                    <div className={`mypage_top_infor ${style.mypage_top_infor}`} id="mypage_top_infor">
                        <MyPage_top />
                    </div>
                    <div className={`MyPage_menu2 ${style.MyPage_menu2}`} id="MyPage_menu2">
                        <div>
                            <Mypage_mid_nav />
                        </div>
                        <div className={`MyPage_myinfo_update_part ${style.MyPage_myinfo_update_part}`}>
                            <MyPage_myinfo_update_part />
                        </div>
                    </div>
                    <div className={`MyPage_banner ${style.MyPage_banner}`} id='MyPage_banner'>

                    </div>
               </div>
            </div>
        );
    }
}

export default MyPage_myinfo_update;