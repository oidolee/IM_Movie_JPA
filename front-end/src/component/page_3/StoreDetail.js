import React, { useRef,useState } from 'react';
import style from '../../styles/page_3/StoreDetail.module.css';
import package1 from '../../assets/page_3/package1.jpg';
import StoreGift from './StoreGift'; // StoreGift 컴포넌트를 import
import StoreTicket from './StoreTicket';


// 스와이퍼
// https://codesandbox.io/p/devbox/swiper-react-virtual-slides-86n5ny?file=%2Fsrc%2FApp.jsx%3A41%2C7-58%2C16
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const StoreDetail = () => {
  const [isStoreGiftOpen, setIsStoreGiftOpen] = useState(false);
  const [isStoreTicketOpen, setIsStoreTicketOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(22000);

  

  // 선물하기 버튼 클릭시 모달 열기
  const openStoreGift = () => {
    setIsStoreGiftOpen(true);
    document.body.style.overflow = 'hidden';
    //document.getElementById('overlay').classList.add('active');
  };

  // 선물하기 모달 닫기
  const closeStoreGift = () => {
    setIsStoreGiftOpen(false);
    document.body.style.overflow = 'auto';
    //document.getElementById('overlay').classList.remove('active');
  };


  // 온라인 관람권 버튼 클릭시 모달 열기
  const openStoreTicket = () => {
    setIsStoreTicketOpen(true);
    document.body.style.overflow = 'hidden';
    //document.getElementById('overlay').classList.add('active');
  };

  // 온라인 관람권 모달 닫기
  const closeStoreTicket= () => {
    setIsStoreTicketOpen(false);
    document.body.style.overflow = 'auto';
    //document.getElementById('overlay').classList.remove('active');
  };





  // 수량 증가
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + 22000);
  };

  // 수량 감소
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((prevPrice) => prevPrice - 22000);
    }
  };

  const [selectedValue, setSelectedValue] = useState(1);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };


  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

//   const prepend = () => {
//     setSlides([
//       `Slide ${prependNumber.current - 2}`,
//       `Slide ${prependNumber.current - 1}`,
//       ...slides,
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };

//   const append = () => {
//     setSlides([...slides, 'Slide ' + ++appendNumber.current]);
//   };

//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };

  return (
    
    <div className={`StoreDetail_store_d ${style.StoreDetail_store_d}`}>
      <div className={`store_detail ${style.store_detail}`}>
        <div className={`main_img ${style.main_img}`}>
          <img src={package1} alt="[롯시와 봄] 패키지" />

            <div style={{width:'450px'}}>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    virtual
                >
                     <SwiperSlide><img src={package1} style={{ width: '150px', left: '0' }}/></SwiperSlide>
                     <SwiperSlide><img src={package1} style={{ width: '150px', left: '0' }}/></SwiperSlide>
                     <SwiperSlide><img src={package1} style={{ width: '150px', left: '0' }}/></SwiperSlide>
                    {/* {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                    ))} */}
                </Swiper>
                
                
            </div>
        </div>

        <div className={`StoreDetail_pd_detail ${style.StoreDetail_pd_detail}`}>
          <table className={`pd_table ${style.pd_table}`}>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: 'auto' }} />
            </colgroup>

            <thead>
              <tr>
                <th className={`badge_wrap ${style.badge_wrap}`} colSpan="2"></th>
              </tr>
            </thead>

            <table className={`StoreDetail_table ${style.StoreDetail_table}`} style={{ width: '100%' }}  >
              <tr>
                <th className={`tit ${style.tit}`} colSpan="2">
                  [롯시와 봄] 패키지
                </th>
              </tr>
              <tr>
                <td>
                  <span className={`StoreDetail_txt_sale ${style.StoreDetail_txt_sale}`}>15%</span>
                </td>
                <td>
                  <span className={`txt_price ${style.txt_price}`}>
                    22,000<em>원</em>
                  </span>
                  <span className={`txt_price_ins ${style.txt_price_ins}`}>26,000원</span>
                </td>
              </tr>
              <tr>
                <th>구성품</th>
                <td>2D일반관람권 2매</td>
              </tr>
              <tr>
                <th>구매제한</th>
                <td>1인 1일 4매</td>
              </tr>
              <tr>
                <th>유효기간</th>
                <td>온라인 관람권 6 개월</td>
              </tr>
              <tr>
                <th>사용가능 영화관</th>
                <td>
                  <button
                    className="btn_col4"
                    title="레이어팝업 열기"
                    onClick={openStoreTicket}
                  >
                    온라인 관람권
                  </button>
                  &nbsp;
                </td>
              </tr>
            </table>
          </table>
          <div className={`bx_num ${style.bx_num}`}>
            <button className={`btn_mins ${style.btn_mins}`} onClick={decreaseQuantity}>
              -
            </button>
            <div className={`txt_num ${style.txt_num}`}>{quantity}</div>
            <button className={`btn_plus ${style.btn_plus}`} onClick={increaseQuantity}>
              +
            </button>
          </div>
          <div className={`txt_price_wrap ${style.txt_price_wrap}`}>
            총 상품금액<strong className={`txt_price_str ${style.txt_price_str}`}>
              {' '}
              {price.toLocaleString()}
              <em>원</em>
            </strong>
          </div>
          <div className={`btn_wrap ${style.btn_wrap}`}>
            <button className="btn_col2 ty7" onClick={openStoreGift}>
              선물하기
            </button>
            <button className="btn_col1 ty7">구매하기</button>
          </div>

          {/* 선물하기 모달/팝업 조건부 렌더링 */}
          {isStoreGiftOpen && <StoreGift onClose={closeStoreGift} />}
          {/* 선물하기 모달/팝업 조건부 렌더링 */}
          {isStoreTicketOpen && <StoreTicket onClose={closeStoreTicket} />}
        </div>
      </div>

      

      <ul className={`tab_wrap ${style.tab_wrap}`}>
        <button type="button" className={`tab_tit ${style.tab_tit}`} onClick={() => handleSelect(1)} style={{ width: '50%', left: '0%', height:'70px'}}>
          <span>사용방법</span>
        </button>
        <button type="button" className={`tab_tit ${style.tab_tit}`} onClick={() => handleSelect(2)} style={{ width: '50%', left: '0%', height:'70px' }}>
          <span>유의사항</span>
        </button>
        <div>
        <li className={`StoreDetail_bottom ${style.StoreDetail_bottom}`}>
        {selectedValue === 1 && 
          <div>
              - 구성 : 2D영화관람권 2매 (롯데시네마 회원 ID당 1일 4매 구매 가능)<br/>


              - 유효기간 : 구매일로부터 6개월(관람일 기준), 유효기간 내 사용가능<br/>


              - 영화관람권은 <span style={{ color: 'red' }}>2D 일반영화에만 적용 가능</span>,, 스페셜관 및 좌석에 적용 불가(일부 특수관 및 좌석에 한해 별도 업차지 금액 지불 시 적용가능)/ 영화관람권은 L.point적립 불가, 관람권 사용 시 VIP 승급금액은 관람권 판매금액으로 반영<br/>


              - 상품 확인은 마이시네마 > 나의 쿠폰함에서 가능, 영화관람권은 롯데시네마 홈페이지, 모바일 웹/앱에서 사용가능, 매점교환권은 롯데시네마 매점에서 쿠폰 제시 후 사용가능 (매점 사용불가 매장 확인 요망)<br/>
          </div>}
        {selectedValue === 2 && 
          <div>
              <b>취소/환불</b><br/>

              - 롯시몰 상품의 취소기한은 구매일로부터 70일 입니다.<br/>


              - 구매취소는 취소기한 내 마이시네마 > 예매/구매내역에서만 가능합니다.(현장취소 불가)<br/>


              - 구매하신 상품은 부분환불 및 현금환불이 되지 않습니다.<br/>


              - 동일 거래 혹은 패키지 상품 중 1장이라도 사용한 경우 환불이 불가합니다.<br/>




              <b>기타</b><br/>

              - 선물한 상품은 마이시네마 > 예매/구매내역 > 선물내역 메뉴에서 30일 내 1회 재발송가능 (단, 받는 사람 번호는 변경 불가)<br/>


              - 이벤트로 판매되는 상품의 구매/사용/취소 규정은 해당 이벤트 페이지를 확인해주세요.<br/>


              - 유효기간 만료일 전 연장 요청 시, 1회에 한하여 3개월 연장 가능합니다.<br/>


              - 고객센터: 1544-8855 (유료)<br/>
          </div>}
        </li>
        </div>
      </ul>
    </div>
  );
};

export default StoreDetail;
