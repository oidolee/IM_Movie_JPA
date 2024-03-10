
import React, {Component} from 'react';
import storeBanner from '../../assets/page_3/storeBanner.jpg'
import package1 from '../../assets/page_3/package1.jpg'
import package2 from '../../assets/page_3/package2.jpg'
import package3 from '../../assets/page_3/package3.jpg'
import ticket1 from '../../assets/page_3/ticket1.jpg'
import ticket2 from '../../assets/page_3/ticket2.jpg'
import foods1 from '../../assets/page_3/foods1.jpg'
import foods2 from '../../assets/page_3/foods2.jpg'
import foods3 from '../../assets/page_3/foods3.jpg'
import bottom1 from '../../assets/page_3/bottom1.jpg'
import bottom2 from '../../assets/page_3/bottom2.jpg'
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
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=1" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={package1}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
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
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=2" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={package2}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>[IM,와봄?] 패키지</h4>
                                    <p>	2D영화관람권 2매 + 스위트콤보 교환권 1매</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>22%&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>28,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}>36,000원</span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=3" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={package3}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>IMPICK♥ [브레드이발소] 2인관람권</h4>
                                    <p>	[브레드이발소:셀럽in베이커리타운] 전용 2D영화관람권 2매</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>38%&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>16,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}>26,000원</span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <h3 className={`store_title ${style.store_title}`} id='store2'>관람권</h3>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=4" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={ticket1}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>일반 관람권</h4>
                                    <p>일반 관람권 1매</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>13,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}></span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=5" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={ticket2}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>IM 관람권</h4>
                                    <p>IM관람권 1매</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>35,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}></span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                      
                        <h3 className={`store_title ${style.store_title}`} id='store3'>스낵음료</h3>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=6" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={foods1}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>스위트콤보</h4>
                                    <p>오리지널L + 탄산음료M2</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>10,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}></span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=7" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={foods2}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>더블콤보</h4>
                                    <p>오리지널팝콘M2 + 탄산음료M2</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>14,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}></span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=8" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src={foods3}></img>
                                </div>
                                <div className={`item_content ${style.item_content}`}>
                                    <div className={`item_title ${style.item_title}`}>
                                    <h4>콜라M</h4>
                                    <p>콜라M</p>
                                    </div>
                                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                                        <span className={`txt_sale ${style.txt_sale}`}>&nbsp;</span>
                                        <span className={`txt_price ${style.txt_price}`}>3,000<em>원</em></span>
                                        &nbsp;
                                        <span className={`txt_price_ins ${style.txt_price_ins}`}></span>
                                        &nbsp;
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* 중앙 리스트 끝 */}
                    

                    <div>
                        <div className={`store_bottom1 ${style.store_bottom1}`} >
                                    <img src={bottom1}></img>
                        </div>
                        <div className={`store_bottom2 ${style.store_bottom2}`}>
                                    <img src={bottom2}></img>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
} 

export default Page3;