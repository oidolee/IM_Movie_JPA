import React, { useRef,useState } from 'react';
import style from '../../styles/page_3/StoreDetail.module.css';
import package1 from '../../assets/page_3/package1.jpg';
import StoreGift from './StoreGift'; // StoreGift 컴포넌트를 import



// 스와이퍼
// https://codesandbox.io/p/devbox/swiper-react-virtual-slides-86n5ny?file=%2Fsrc%2FApp.jsx%3A41%2C7-58%2C16
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const StoreDetail = () => {
  const [isStoreGiftOpen, setIsStoreGiftOpen] = useState(false);
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
                    id="availableCinema"
                    className="btn_col4 ty3 rnd"
                    title="레이어팝업 열기"
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
        </div>
      </div>

      

      <ul className={`tab_wrap ${style.tab_wrap}`}>
        <button type="button" className={`tab_tit ${style.tab_tit}`} style={{ width: '50%', left: '0%' }}>
          <span>사용방법</span>
        </button>
        <button type="button" className={`tab_tit ${style.tab_tit}`} style={{ width: '50%', left: '0%' }}>
          <span>유의사항</span>
        </button>
      </ul>
    </div>
  );
};

export default StoreDetail;
