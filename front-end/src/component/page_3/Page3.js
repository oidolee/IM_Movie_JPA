
import React, {Component} from 'react';
import storeBanner from '../../assets/page_3/storeBanner.jpg'
import package1 from '../../assets/page_3/package1.jpg'
import style from '../../styles/page_3/StoreList.css';

class Page3 extends Component{
    render(){
        return(
            <div className={`page3_store ${style.page3_store}`}>
                <div className={`storeBanner ${style.storeBanner}`}>
                    <img src={storeBanner}></img>
                </div>

                <div className={`page3_contents ${style.page3_contents}`}>
                    <div className={`second_menu ${style.second_menu}`}>
                        <li style={{ width: '33%', left: '0' }}><a href='#store1' >베스트</a></li>
                        <li style={{ width: '33%', left: '0' }}><a href='#store2' >관람권</a></li>
                        <li style={{ width: '33%', left: '0' }}><a href='#store3' >스낵음료</a></li>
                    </div>

                    <div className={`page3_store2 ${style.page3_store2}`}>
                        <h3 className={`store_title ${style.store_title}`} id='store1'>베스트</h3>
                        <a href="/StoreDetail" className={`store_item ${style.store_item}`}>
                            <div className={`store_img ${style.store_img}`}>
                                <img src={package1}></img>
                            </div>
                            <div className={`item_content ${style.item_content}`}>
                                <div className={`badge_wrap ${style.badge_wrap}`}></div>
                                <div className={`item_title ${style.item_title}`}>
                                <h4>[IM과 봄] 패키지</h4>
                                <p>2D일반관람권 2매</p>
                                </div>
                                <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                    <span className={`txt_sale ${style.txt_sale}`}>15%&nbsp;</span>
                                    <span className={`txt_price ${style.txt_price}`}>22,000<em>원</em></span>
                                    &nbsp;
                                    <span className={`txt_price_ins ${style.txt_price_ins}`}>26,000원</span>
                                    &nbsp;
                                </div>
                            </div>
                        </a>
                        
                        <h3 className={`store_title ${style.store_title}`} id='store2'>관람권</h3>
                        <a href="/StoreDetail" className={`store_item ${style.store_item}`}>
                            <div className={`store_img ${style.store_img}`}>
                                <img src={package1}></img>
                            </div>
                            <div className={`item_content ${style.item_content}`}>
                                <div className={`badge_wrap ${style.badge_wrap}`}></div>
                                <div className={`item_title ${style.item_title}`}>
                                <h4>[IM과 봄] 패키지</h4>
                                <p>2D일반관람권 2매</p>
                                </div>
                                <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                    <span className={`txt_sale ${style.txt_sale}`}>15%&nbsp;</span>
                                    <span className={`txt_price ${style.txt_price}`}>22,000<em>원</em></span>
                                    &nbsp;
                                    <span className={`txt_price_ins ${style.txt_price_ins}`}>26,000원</span>
                                    &nbsp;
                                </div>
                            </div>
                        </a>


                        <h3 className={`store_title ${style.store_title}`} id='store3'>스낵음료</h3>
                        <a href="/StoreDetail" className={`store_item ${style.store_item}`}>
                            <div className={`store_img ${style.store_img}`}>
                                <img src={package1}></img>
                            </div>
                            <div className={`item_content ${style.item_content}`}>
                                <div className={`badge_wrap ${style.badge_wrap}`}></div>
                                <div className={`item_title ${style.item_title}`}>
                                <h4>[IM과 봄] 패키지</h4>
                                <p>2D일반관람권 2매</p>
                                </div>
                                <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                    <span className={`txt_sale ${style.txt_sale}`}>15%&nbsp;</span>
                                    <span className={`txt_price ${style.txt_price}`}>22,000<em>원</em></span>
                                    &nbsp;
                                    <span className={`txt_price_ins ${style.txt_price_ins}`}>26,000원</span>
                                    &nbsp;
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

        );
    }
}

export default Page3;