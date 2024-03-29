
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
import foods4 from '../../assets/page_3/foods4.jpg'
import bottom1 from '../../assets/page_3/bottom1.jpg'
import bottom2 from '../../assets/page_3/bottom2.jpg'
import style from '../../styles/page_3/StoreList.css';
import ApiService from '../../ApiService';
import { TableBody } from '@mui/material'
import { Link } from 'react-scroll';

class Page3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [], 
      message: null,
    };
  }

  componentDidMount() {
    this.storeList(); 
  }

  // list
  storeList = () => {
    ApiService.ListStore_Admin() 
      .then((res) => {
        
        this.setState({
          lists: res.data, 
        });
      })
      .catch((err) => {
        console.log("ListStore_Admin() Error!!", err);
      });
  };

  // update
  EditStore_Admin = (itemCode) => {
    console.log("edit 버튼 호출");
    window.localStorage.setItem("sampleID", itemCode);
    ApiService.fetchStoreByID(itemCode);
    this.props.history.push(`/page_3/EditStore_Admin`);
  };

  render() {
    return (
      <div className={`page3_store ${style.page3_store}`}>
        <div className={`storeBanner ${style.storeBanner}`}>
          <img src={storeBanner}></img>
        </div>

        <div className={`page3_contents ${style.page3_contents}`}>
        <div className={`second_menu ${style.second_menu}`}>
            <li style={{ width: '33%', left: '0' }}>
              <Link to="store1"   className={`page3_link ${style.page3_link}`}>
                베스트
              </Link>
            </li>
            <li style={{ width: '33%', left: '0' }}>
              <Link to="store2" className={`page3_link ${style.page3_link}`}>
                관람권
              </Link>
            </li>
            <li style={{ width: '33%', left: '0' }}>
              <Link to="store3" className={`page3_link ${style.page3_link}`}>
                스낵음료
              </Link>
            </li>
          </div>

          <div className={`page3_store2 ${style.page3_store2}`}>
            <h3 className={`store_title ${style.store_title}`} id="store1">
              베스트
            </h3>

            <div className={`page3_flex ${style.page3_flex}`}>
              {this.state.lists.map(
                (item, index) =>
                 
                  item.itemType === "베스트" && (
                    <a
                      onClick={() => this.EditStore_Admin(item.itemCode)}
                      className={`store_item ${style.store_item}`}
                      key={item.itemCode}
                    >
                      <div className={`store_img ${style.store_img}`}>
                        <img
                          src={item.itemImage}
                          alt={`Item ${item.itemCode}`}
                        />
                      </div>
                      <div className={`item_content ${style.item_content}`}>
                        <div className={`item_title ${style.item_title}`}>
                          <h4>{item.itemName}</h4>
                          <p>{item.itemDetail}</p>
                        </div>
                        <div
                          className={`txt_price_wrap ${style.txt_price_wrap}`}
                        >
                          <span className={`txt_sale ${style.txt_sale}`}>
                            {Math.floor(
                              (1 - item.itemSalePrice / item.itemPrice) * 100
                            )}
                            %&nbsp;
                          </span>
                          <span className={`txt_price ${style.txt_price}`}>
                            {item.itemSalePrice.toLocaleString()}
                            <em>원</em>
                          </span>
                          &nbsp;
                          <span
                            className={`txt_price_ins ${style.txt_price_ins}`}
                          >
                            {item.itemPrice.toLocaleString()}원
                          </span>
                          &nbsp;
                        </div>
                      </div>
                    </a>
                  )
              )}
            </div>

            <h3 className={`store_title ${style.store_title}`} id="store2">
              관람권
            </h3>

            <div className={`page3_flex ${style.page3_flex}`}>
              {this.state.lists.map(
                (item, index) =>
                  // itemType이 "관람권"인 경우에만 해당 아이템을 출력
                  item.itemType === "관람권" && (
                    <a
                      onClick={() => this.EditStore_Admin(item.itemCode)}
                      className={`store_item ${style.store_item}`}
                      key={item.itemCode}
                    >
                      <div className={`store_img ${style.store_img}`}>
                        <img
                          src={item.itemImage}
                          alt={`Item ${item.itemCode}`}
                        />
                      </div>
                      <div className={`item_content ${style.item_content}`}>
                        <div className={`item_title ${style.item_title}`}>
                          <h4>{item.itemName}</h4>
                          <p>{item.itemDetail}</p>
                        </div>
                        <div
                          className={`txt_price_wrap ${style.txt_price_wrap}`}
                        >
                          {item.itemPrice !== item.itemSalePrice && (
                            <span className={`txt_sale ${style.txt_sale}`}>
                              {Math.floor(
                                (1 - item.itemSalePrice / item.itemPrice) * 100
                              )}
                              %&nbsp;
                            </span>
                          )}
                          <span className={`txt_price ${style.txt_price}`}>
                            {item.itemSalePrice}
                            <em>원</em>
                          </span>
                          &nbsp;
                          {item.itemPrice !== item.itemSalePrice && (
                            <span
                              className={`txt_price_ins ${style.txt_price_ins}`}
                            >
                              {item.itemPrice}원
                            </span>
                          )}
                          &nbsp;
                        </div>
                      </div>
                    </a>
                  )
              )}
            </div>

            <h3 className={`store_title ${style.store_title}`} id="store3">
              스낵음료
            </h3>
           
            <div className={`page3_flex ${style.page3_flex}`}>
              {this.state.lists.map(
                (item, index) =>
                  // itemType이 "스낵음료"인 경우에만 해당 아이템을 출력
                  item.itemType === "스낵음료" && (
                    <a
                      onClick={() => this.EditStore_Admin(item.itemCode)}
                      className={`store_item ${style.store_item}`}
                      key={item.itemCode}
                    >
                      <div className={`store_img ${style.store_img}`}>
                        <img
                          src={item.itemImage}
                          alt={`Item ${item.itemCode}`}
                        />
                      </div>
                      <div className={`item_content ${style.item_content}`}>
                        <div className={`item_title ${style.item_title}`}>
                          <h4>{item.itemName}</h4>
                          <p>{item.itemDetail}</p>
                        </div>
                        <div
                          className={`txt_price_wrap ${style.txt_price_wrap}`}
                        >
                          {item.itemPrice !== item.itemSalePrice && (
                            <span className={`txt_sale ${style.txt_sale}`}>
                              {Math.floor(
                                (1 - item.itemSalePrice / item.itemPrice) * 100
                              )}
                              %&nbsp;
                            </span>
                          )}
                          <span className={`txt_price ${style.txt_price}`}>
                            {item.itemSalePrice}
                            <em>원</em>
                          </span>
                          &nbsp;
                          {item.itemPrice !== item.itemSalePrice && (
                            <span
                              className={`txt_price_ins ${style.txt_price_ins}`}
                            >
                              {item.itemPrice}원
                            </span>
                          )}
                          &nbsp;
                        </div>
                      </div>
                    </a>
                  )
              )}
            </div>
          </div>
          {/* 중앙 리스트 끝 */}

          <div>
            <div className={`store_bottom1 ${style.store_bottom1}`}>
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