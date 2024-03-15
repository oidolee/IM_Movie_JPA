
import React, {Component} from 'react';
import storeBanner from '../../assets/page_3/storeBanner.jpg'
import package1 from '../../assets/page_3/IM_package1.png'
import package2 from '../../assets/page_3/IM_package2.png'
import package3 from '../../assets/page_3/IM_package3.png'
import ticket1 from '../../assets/page_3/IM_ticket1.png'
import ticket2 from '../../assets/page_3/IM_ticket2.png'
import foods1 from '../../assets/page_3/foods1.jpg'
import foods2 from '../../assets/page_3/foods2.jpg'
import foods3 from '../../assets/page_3/foods3.jpg'
import bottom1 from '../../assets/page_3/bottom1.jpg'
import bottom2 from '../../assets/page_3/bottom2.jpg'
import style from '../../styles/page_3/StoreList.css';
import ApiService from '../../ApiService';
import { TableBody } from '@mui/material'

class Page3 extends Component{

    constructor(props) {
        super(props);

        this.state = {
            lists: [],    // 5. 리스트 데이터
            message: null
        }
    }

    // 라이프사이클 중 컴포턴트가 생성된 후 사용자에게 보여지기 전까지의 전체 과정을 렌더링(데이트 로딩)
    // db에서 넘어온 데이터를 받아와서 this.reloadSampleList(); 호출한다.
    componentDidMount() {
        this.storeList();  //1.
    }

    // list 
    storeList = () => {
        ApiService.ListStore_Admin() // 2. 스프링부트와 통신기능 호출 >  3. ApiService.js 스프링부트의 데이터를 가지고 온다.
        .then(res => {              // 4.
            this.setState({
                lists: res.data // res 에 결과 데이타를 담아라
            })
        })
        .catch(err => {
            console.log('ListStore_Admin() Error!!', err);
        })
    }

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


<div className={`page3_flex ${style.page3_flex}`}>
    {this.state.lists.map((item, index) => (
        // itemType이 "스낵음료"인 경우에만 해당 아이템을 출력
        item.itemType === "베스트" && (
            <a href={`/page_3/EditStore_Admin?${item.itemCode}`} className={`store_item ${style.store_item}`} key={index}>
                <div className={`store_img ${style.store_img}`}>
                    <img src={item.itemImage} alt={`Item ${item.itemCode}`} />
                </div>
                <div className={`item_content ${style.item_content}`}>
                    <div className={`item_title ${style.item_title}`}>
                        <h4>{item.itemName}</h4>
                        <p>{item.itemDetail}</p>
                    </div>
                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                        <span className={`txt_sale ${style.txt_sale}`}>{Math.floor((1 - (item.itemSalePrice / item.itemPrice)) * 100)}%&nbsp;</span>
                        <span className={`txt_price ${style.txt_price}`}>{item.itemPrice}<em>원</em></span>
                        &nbsp;
                        <span className={`txt_price_ins ${style.txt_price_ins}`}>{item.itemSalePrice}원</span>
                        &nbsp;
                    </div>
                </div>
            </a>
        )
    ))}
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
                      

                        <div className={`page3_flex ${style.page3_flex}`}>
    {this.state.lists.map((item, index) => (
        // itemType이 "관람권"인 경우에만 해당 아이템을 출력
        item.itemType === "관람권" && (
            <a href={`/StoreDetail?num=${item.itemCode}`} className={`store_item ${style.store_item}`} key={index}>
                <div className={`store_img ${style.store_img}`}>
                    <img src={item.itemImage} alt={`Item ${item.itemCode}`} />
                </div>
                <div className={`item_content ${style.item_content}`}>
                    <div className={`item_title ${style.item_title}`}>
                        <h4>{item.itemName}</h4>
                        <p>{item.itemDetail}</p>
                    </div>
                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                        <span className={`txt_sale ${style.txt_sale}`}>{Math.floor((1 - (item.itemSalePrice / item.itemPrice)) * 100)}%&nbsp;</span>
                        <span className={`txt_price ${style.txt_price}`}>{item.itemPrice}<em>원</em></span>
                        &nbsp;
                        <span className={`txt_price_ins ${style.txt_price_ins}`}>{item.itemSalePrice}원</span>
                        &nbsp;
                    </div>
                </div>
            </a>
        )
    ))}
</div>


                        <h3 className={`store_title ${style.store_title}`} id='store3'>스낵음료</h3>
                        <div className={`page3_flex ${style.page3_flex}`}>
                            <a href="/StoreDetail?num=6" className={`store_item ${style.store_item}`}>
                                <div className={`store_img ${style.store_img}`}>
                                    <img src="https://cf.lottecinema.co.kr//Media/WebAdmin/113c4f562c6e4c9d94e973b590f594ab.jpg"></img>
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


<div className={`page3_flex ${style.page3_flex}`}>
    {this.state.lists.map((item, index) => (
        // itemType이 "스낵음료"인 경우에만 해당 아이템을 출력
        item.itemType === "스낵음료" && (
            <a href={`/StoreDetail?num=${item.itemCode}`} className={`store_item ${style.store_item}`} key={index}>
                <div className={`store_img ${style.store_img}`}>
                    <img src={item.itemImage} alt={`Item ${item.itemCode}`} />
                </div>
                <div className={`item_content ${style.item_content}`}>
                    <div className={`item_title ${style.item_title}`}>
                        <h4>{item.itemName}</h4>
                        <p>{item.itemDetail}</p>
                    </div>
                    <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
                        <span className={`txt_sale ${style.txt_sale}`}>{Math.floor((1 - (item.itemSalePrice / item.itemPrice)) * 100)}%&nbsp;</span>
                        <span className={`txt_price ${style.txt_price}`}>{item.itemPrice}<em>원</em></span>
                        &nbsp;
                        <span className={`txt_price_ins ${style.txt_price_ins}`}>{item.itemSalePrice}원</span>
                        &nbsp;
                    </div>
                </div>
            </a>
        )
    ))}
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