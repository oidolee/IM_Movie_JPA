import React, {Component} from 'react';
import style from  '../../styles/main/MainBody.module.css'

import slide_1 from '../../assets/main/slide_1.jpg'

import event_1 from '../../assets/main/event_1.jpg'
import Hyundaicard from '../../assets/main/Hyundaicard_296511.jpg'
import Main_Swiper from "./Main_Swiper";

class MainBody extends Component{
    render(){
        return(
            <div>
                <div className='slide_box'>
                    <Main_Swiper />
                </div>
                <div className={`MainBody_contents ${style.MainBody_contents}`}>

                    <div className={`MainBody_contents_top ${style.MainBody_contents_top}`}>
                        MainBody_contents_top
                    </div>
                    <div className={`MainBody_section_1 ${style.MainBody_section_1}`}>

                        <div className={`MainBody_contents_left ${style.MainBody_contents_left}`}>
                            <div className={`MainBody_contents1_leftTop ${style.MainBody_contents1_leftTop}`}>
                                <ul>
                                    <li><a href='#'><img src="" alt=""/>1</a></li>
                                    <li><a href='#'><img src="" alt=""/>2</a></li>
                                    <li><a href='#'><img src="" alt=""/>3</a></li>
                                </ul>
                            </div>
                            <div className={`MainBody_contents1_leftBottom ${style.MainBody_contents1_leftBottom}`}></div>
                        </div>

                        <div className={`MainBody_contents_right ${style.MainBody_contents_right}`}>
                            <a href='#'>
                                <img src={Hyundaicard} alt="Hyundaicard" />
                            </a>
                        </div>
                    </div>

                    contents
                </div>
            </div>
        );
    }
}
  
export default MainBody;