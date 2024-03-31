import React, { Component } from "react";
import style from "../../styles/page_3/StoreDetail.module.css";
import package1 from "../../assets/page_3/IM_package1.png";
import StoreGift from "./StoreGift"; // StoreGift 컴포넌트를 import
import StoreTicket from "./StoreTicket";
import bottom1 from "../../assets/page_3/bottom1.jpg";
import bottom2 from "../../assets/page_3/bottom2.jpg";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ApiService from '../../ApiService';
import { withRouter } from 'react-router-dom';




const localHost = "http://localhost:3000/"; // 로컬
const proHost = "http://3.39.155.236:3000/"; // 개벌

let serverUrl;

if (process.env.NODE_ENV === 'development') {
  serverUrl = localHost;
} else {
  serverUrl = proHost;
}

console.log("현재 베이스 주소 StoreDetail")
console.log(serverUrl)

class StoreDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStoreGiftOpen: false,
      isStoreTicketOpen: false,
      quantity: 1,
      price: 22000,
      selectedValue: 1,
      swiperRef: null,
      itemCode: '', // 상세페이지
      itemType: '',
      itemName: '',
      itemDetail: '',
      itemPrice: '',
      itemSalePrice: '',
      itemImage: '',
      itemExp: '',
      lists: [],    // 5. 리스트 데이터
      message: null  // 5. 리스트 데이터
    };
  }


// 상세페이지
loadStore = () => {
  ApiService.fetchStoreByID(window.localStorage.getItem("sampleID")) 
  .then(res => {        
  let sotreEdit = res.data;
  this.setState({
      itemCode: sotreEdit.itemCode,
      itemType: sotreEdit.itemType,
      itemName: sotreEdit.itemName,
      itemDetail: sotreEdit.itemDetail,
      itemPrice: sotreEdit.itemPrice,
      itemSalePrice: sotreEdit.itemSalePrice,
      itemImage: sotreEdit.itemImage,
      itemExp: sotreEdit.itemExp
  })
})

.catch(err => {
  console.log('loadSample() Error!!', err);
})
}       


    componentDidMount() {
        this.storeList();  //1. 리스트목록
        this.loadStore();  //1. 상세페이지
    }

    // 리스트목록
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


onChange = (e) => {  // 1. 입력한 값으로 변경한다.
  this.setState({
      [e.target.name] : e.target.value 
  });
}

EditStore_Admin = (e) => {
  e.preventDefault();

  let inputData = {   // 3. state값을 읽어온다.
      itemCode: this.state.itemCode,
      itemType: this.state.itemType,
      itemName: this.state.itemName,
      itemDetail: this.state.itemDetail,
      itemPrice: this.state.itemPrice,
      itemSalePrice: this.state.itemSalePrice,
      itemImage: this.state.itemImage,
      itemExp: this.state.itemExp
  }


  // 3. 수정처리(화면에서 입력한 값 -> onChange() -> setState() -> inputData)
  ApiService.EditStore_Admin(inputData)    // 스프링부트와의 통신기능 호출
      .then(res => {
          this.setState({                    
          })
          console.log('input 성공 : ', res.data);  // 컨트롤러에서 전달함(resultCode, resultMsg)
          this.props.history.push('DetailStore');  // RouterComponent.js - ListSampleComponent 호출
      })
      .catch(err => {
          console.log('DetailStore() 에러!! : ', err);
      });

}




  // openStoreGift = () => {
  //   const { quantity, price } = this.state; // 총 구매 수량과 총 상품금액
  //   this.setState({ isStoreGiftOpen: true, totalQuantity: quantity, totalPrice: price });
  //   document.body.style.overflow = "hidden";
  // };

  openStoreGift = () => {
    const { quantity, price } = this.state;
    this.setState({ isStoreGiftOpen: true });
    document.body.style.overflow = "hidden";
  };

  closeStoreGift = () => {
    this.setState({ isStoreGiftOpen: false });
    document.body.style.overflow = "auto";
  };

  openStoreTicket = () => {
    this.setState({ isStoreTicketOpen: true });
    document.body.style.overflow = "hidden";
    //this.props.history.push('/page_3/StoreTicket'); // 페이지 이동
  };

  closeStoreTicket = () => {
    this.setState({ isStoreTicketOpen: false });
    document.body.style.overflow = "auto";
  };

  increaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
      price: prevState.price + 22000,
    }));
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
        price: prevState.price - 22000,
      }));
    }
  };

  handleSelect = (value) => {
    this.setState({ selectedValue: value });
  };

  setSwiperRef = (swiper) => {
    this.setState({ swiperRef: swiper });
  };

  Payment_Store = () => {
    const { totalQuantity, totalPrice, itemName, itemCode, itemImage  } = this.state;

  // 로컬 스토리지에서 sampleID 제거
  window.localStorage.removeItem("sampleID");

  // 로컬 스토리지에 새로운 데이터 저장
  window.localStorage.setItem(
    "sampleID",
    JSON.stringify({
      totalQuantity: this.state.quantity,
      totalPrice: this.state.price,
      itemName,
      itemCode,
      itemImage,
    })
  );



    this.props.history.push("/page_3/Reservation_Payment_Store");
    //window.location.href = "/page_3/Reservation_Payment_Store";
    //window.location.href = "/page_3/Store_Payment_Finish";
  };

  handleItemClick = (itemCode) => {
    console.log("handleItemClick 함수 호출됨");
    // 상세 페이지로 이동하는 로직
    // 예시: this.props.history.push(`/store/${itemCode}`);
    window.localStorage.setItem("sampleID", itemCode);
    console.log('fetchStoreByID 함수 호출됨', itemCode); // 수정
    ApiService.fetchStoreByID(itemCode)
      .then(() => {
        // fetchStoreByID 함수가 완료된 후에 페이지 이동
        this.props.history.push(`/page_3/EditStore_Admin`);
      })
      .catch(error => {
        console.error("상품 상세 정보를 가져오는 중 오류 발생:", error); // 수정
      });
};

  render() {
    const {
      isStoreGiftOpen,
      isStoreTicketOpen,
      quantity,
      price,
      selectedValue,
      swiperRef
    } = this.state;

    return (
      
      <div className={`StoreDetail_store_d ${style.StoreDetail_store_d}`}>


        <div className={`store_detail ${style.store_detail}`}>
          <div className={`main_img ${style.main_img}`}>
            <img src={serverUrl+this.state.itemImage} alt="[IM과 봄] 패키지" />

            <div style={{ width: "450px" }}>
              <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={this.setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                virtual
              >

                <div style={{ display: "flex" }}>
                {this.state.lists.map((item, index) => (
                  <SwiperSlide item={item} key={index}>
                    <img src={`${serverUrl}${item.itemImage}`} alt={`Item ${item.itemCode}`} style={{ width: "150px" }} onClick={() => this.handleItemClick(item.itemCode)}/>
                    <div>{item.itemName}</div>
                  </SwiperSlide>
                ))}
                </div>
              </Swiper>
            </div>
          </div>

          <div
            className={`StoreDetail_pd_detail ${style.StoreDetail_pd_detail}`}
          >
            <table className={`pd_table ${style.pd_table}`}>
              <colgroup>
                <col style={{ width: "30%" }} />
                <col style={{ width: "auto" }} />
              </colgroup>

              <thead>
                <tr>
                  <th
                    className={`badge_wrap ${style.badge_wrap}`}
                    colSpan="2"
                  ></th>
                </tr>
              </thead>

              <table
                className={`StoreDetail_table ${style.StoreDetail_table}`}
                style={{ width: "100%" }}
              >
                <tr>
                {/* 상품명 */}
                  <th className={`tit ${style.tit}`} colSpan="2"> 
                     {this.state.itemName}
                  </th>
                </tr>
                <tr>
                  <td>
                    <span
                      className={`StoreDetail_txt_sale ${style.StoreDetail_txt_sale}`}
                    >
                       {Math.floor(((this.state.itemPrice - this.state.itemSalePrice) / this.state.itemPrice) * 100)}%
                    </span>
                  </td>
                  <td>
                    <span className={`txt_price ${style.txt_price}`}>
                      {this.state.itemSalePrice.toLocaleString()}<em>원</em>
                    </span>
                    <span className={`txt_price_ins ${style.txt_price_ins}`}>
                      {this.state.itemPrice.toLocaleString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>구성품</th>
                  <td>{this.state.itemDetail}</td>
                </tr>
                <tr>
                  <th>구매제한</th>
                  <td>1인 1일 4매</td>
                </tr>
                <tr>
                  <th>유효기간</th>
                  <td>{this.state.itemExp}</td>
                </tr>
                <tr>
                  <th>사용가능 영화관</th>
                  <td>
                    <button
                      className="btn_col4"
                      title="레이어팝업 열기"
                      onClick={this.openStoreTicket}
                    >
                      온라인 사용권
                    </button>
                    &nbsp;
                  </td>
                </tr>
              </table>
            </table>
            <div className={`bx_num ${style.bx_num}`}>
              <button
                className={`btn_mins ${style.btn_mins}`}
                onClick={this.decreaseQuantity}
              >
                -
              </button>
              <div className={`txt_num ${style.txt_num}`}>{quantity}</div>
              <button
                className={`btn_plus ${style.btn_plus}`}
                onClick={this.increaseQuantity}
              >
                +
              </button>
            </div>
            <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
              총 상품금액
              <strong className={`txt_price_str ${style.txt_price_str}`}>
                {" "}
                {(this.state.itemSalePrice * this.state.quantity).toLocaleString()}
                <em>원</em>
              </strong>
            </div>
            <div className={`btn_wrap ${style.btn_wrap}`}>
              <button className="btn_col2 ty7" onClick={this.openStoreGift}>
                선물하기
              </button>
              <button className="btn_col1 ty7" onClick={this.Payment_Store}>구매하기</button>
            </div>

            {/* 선물하기 모달창 */}
            {isStoreGiftOpen && 
            <StoreGift onClose={this.closeStoreGift} totalQuantity={quantity} totalPrice={this.state.itemSalePrice * quantity} itemCode={this.state.itemCode} itemName={this.state.itemName}  itemImage={this.state.itemImage}/>}
            {/* 온라인 사용권 모달창 */}
            {isStoreTicketOpen && <StoreTicket onClose={this.closeStoreTicket} />}
          </div>
        </div>

        <div className={`tab_wrap ${style.tab_wrap}`}>
          <button
            type="button"
            className={`tab_tit ${style.tab_tit} ${selectedValue === 1 ? style.StoreDetail_selectedTab : ''}`}
            onClick={() => this.handleSelect(1)}
            style={{ width: "50%", left: "0%", height: "70px" }}
          >
            <span>사용방법</span>
          </button>
          <button
            type="button"
            className={`tab_tit ${style.tab_tit} ${selectedValue === 2 ? style.StoreDetail_selectedTab : ''}`}
            onClick={() => this.handleSelect(2)}
            style={{ width: "50%", left: "0%", height: "70px" }}
          >
            <span>유의사항</span>
          </button>
          <div>
            <div className={`StoreDetail_bottom ${style.StoreDetail_bottom}`}>
              {selectedValue === 1 && (
                <div>
                  - 구성 : 2D영화관람권 2매 (IM 회원 ID당 1일 4매 구매
                  가능)
                  <br />
                  - 유효기간 : 구매일로부터 12개월(관람일 기준), 유효기간 내
                  사용가능
                  <br />- 영화관람권은{" "}
                  <span style={{ color: "red" }}>2D 일반영화에만 적용 가능</span>
                  , 스페셜관 및 좌석에 적용 불가(일부 특수관 및 좌석에 한해 별도
                  업차지 금액 지불 시 적용가능)/ 영화관람권은 L.point적립 불가,
                  관람권 사용 시 VIP 승급금액은 관람권 판매금액으로 반영
                  <br />
                  - 상품 확인은 마이시네마 > 나의 쿠폰함에서 가능, 영화관람권은
                  IM 홈페이지, 모바일 웹/앱에서 사용가능, 매점교환권은
                  IM 매점에서 쿠폰 제시 후 사용가능 (매점 사용불가 매장
                  확인 요망)
                  <br />
                </div>
              )}
              {selectedValue === 2 && (
                <div>
                  <b>취소/환불</b>
                  <br />
                  - IM몰 상품의 취소기한은 구매일로부터 70일 입니다.
                  <br />
                  - 구매취소는 취소기한 내 마이시네마 > 예매/구매내역에서만
                  가능합니다.(현장취소 불가)
                  <br />
                  - 구매하신 상품은 부분환불 및 현금환불이 되지 않습니다.
                  <br />
                  - 동일 거래 혹은 패키지 상품 중 1장이라도 사용한 경우 환불이
                  불가합니다.
                  <br />
                  <b>기타</b>
                  <br />
                  - 선물한 상품은 마이시네마 > 예매/구매내역 > 선물내역 메뉴에서
                  30일 내 1회 재발송가능 (단, 받는 사람 번호는 변경 불가)
                  <br />
                  - 이벤트로 판매되는 상품의 구매/사용/취소 규정은 해당 이벤트
                  페이지를 확인해주세요.
                  <br />
                  - 유효기간 만료일 전 연장 요청 시, 1회에 한하여 3개월 연장
                  가능합니다.
                  <br />
                  - 고객센터: 1544-8855 (유료)
                  <br />
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className={`store_bottom1 ${style.store_bottom1}`}>
            <img src={bottom1} alt="" />
          </div>
          <div className={`store_bottom2 ${style.store_bottom2}`}>
            <img src={bottom2} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreDetail);