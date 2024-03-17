import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../../../styles/page_5/movieNow.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

//이미지
import Swiper1 from '../../../assets/page_5_4/Swiper1.jpg'
import Swiper2 from '../../../assets/page_5_4/Swiper2.jpg'
import Swiper3 from '../../../assets/page_5_4/Swiper3.jpg'
import Swiper4 from '../../../assets/page_5_4/Swiper4.jpg'
import Swiper5 from '../../../assets/page_5_4/Swiper5.jpg'

import movie1 from '../../../assets/page_5/movie1.jpg';
import movie2 from '../../../assets/page_5/movie2.jpg';
import movie3 from '../../../assets/page_5/movie3.jpg';
import movie4 from '../../../assets/page_5/movie4.jpg';
import movie5 from '../../../assets/page_5/movie5.jpg';
import movie12 from '../../../assets/page_5/movie12.jpg';
import movie14 from '../../../assets/page_5/movie14.jpg';
import movie42 from '../../../assets/page_5/movie42.jpg';
import movie51 from '../../../assets/page_5/movie51.jpg';
import movie52 from '../../../assets/page_5/movie52.jpg';
import movie53 from '../../../assets/page_5/movie53.jpg';
import movie54 from '../../../assets/page_5/movie54.jpg';
import movie55 from '../../../assets/page_5/movie55.jpg';
import movie56 from '../../../assets/page_5/movie56.jpg';
import movie57 from '../../../assets/page_5/movie57.jpg';
import movie58 from '../../../assets/page_5/movie58.jpg';
import movie59 from '../../../assets/page_5/movie59.jpg';
import movie60 from '../../../assets/page_5/movie60.jpg';
import movie61 from '../../../assets/page_5/movie61.jpg';
import movie62 from '../../../assets/page_5/movie62.jpg';
import movie63 from '../../../assets/page_5/movie63.jpg';
import movie64 from '../../../assets/page_5/movie64.jpg';
import movie65 from '../../../assets/page_5/movie65.jpg';
import movie66 from '../../../assets/page_5/movie66.jpg';
import movie67 from '../../../assets/page_5/movie67.jpg';
import movie68 from '../../../assets/page_5/movie68.jpg';


import BobMarley_OneLove from '../../../assets/page_5/BobMarley_OneLove.jpg';





function MovieNext() {
  const swiperRef = useRef(null);
  const [isPlayActive, setIsPlayActive] = useState(true);
  const history = useHistory();

  const startSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay?.start();
      setIsPlayActive(true);
    }
  };

  const stopSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay?.stop();
      setIsPlayActive(false);
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  };

  const handleButtonClick = () => {
    // 버튼을 클릭하면 '/detail' 경로로 이동합니다.
    history.push("/movieDetail");
  };

  
  

  return (
    <>
      <div className={`mySwiper ${style.mySwiper}`}>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Swiper1} alt="Swiper1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper2} alt="Swiper2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper3} alt="Swiper3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper4} alt="Swiper4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper5} alt="Swiper5" />
          </SwiperSlide>
          <div className='Main_Swiper_control_box'>
            <i className={`bi bi-play-fill ${isPlayActive ? 'moveActive' : ''}`} onClick={startSlide}></i>
            <i className={`bi bi-stop-fill ${!isPlayActive ? 'moveActive' : ''}`} onClick={stopSlide}></i>
          </div>
        </Swiper>
      </div>

      <div className={`movie_list_wrap ${style.movie_list_wrap}`}>
            <div className={`now_movie_tit1 ${style.now_movie_tit1}`}>
              <label for="ml_title3">현재상영작</label>
            </div>  

            <div className={`now_movie_list1 ${style.now_movie_list1}`}  style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie1} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>파묘</Card.Title>
                <Card.Text>134분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie2} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>듄: 파트2</Card.Title>
                <Card.Text>165분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie3} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>가여운 것들</Card.Title>
                <Card.Text>141분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie4} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>웡카</Card.Title>
                <Card.Text>116분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie5} style={{ width: '300px', height: '500px' }}  />
            </Card>        
          </div>

          <div className={`now_movie_list1 ${style.now_movie_list1}`}  style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie67} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>건국전쟁</Card.Title>
                <Card.Text>100분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie5} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>패스트 라이브즈</Card.Title>
                <Card.Text>105분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie12} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>소풍</Card.Title>
                <Card.Text>113분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie68} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>[위드키즈]브레드이발소: 셀럽 인 베이커리타운</Card.Title>
                <Card.Text>73분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie51} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>예수는 역사다</Card.Title>
                <Card.Text>113분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`now_movie_list1 ${style.now_movie_list1}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie52} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>[20주년특가]이프 온리</Card.Title>
                <Card.Text>96분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie14} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>추락의 해부</Card.Title>
                <Card.Text>151분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie42} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>생츄어리 2 : 쿼카가 너무해</Card.Title>
                <Card.Text>87분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie53} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>서울의 봄</Card.Title>
                <Card.Text>141분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie54} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>벙커 게임 </Card.Title>
                <Card.Text>95분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`now_movie_list1 ${style.now_movie_list1}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie55} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>길위에 김대중</Card.Title>
                <Card.Text>126분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie56} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>바튼 아카데미</Card.Title>
                <Card.Text>133분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie57} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>시민덕희</Card.Title>
                <Card.Text>113분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie58} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>신차원! 짱구는 못말려 더 무비 초능력 대결전 ~날아라 수제김밥</Card.Title>
                <Card.Text>94분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie59} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>괴물 </Card.Title>
                <Card.Text>126분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`now_movie_list1 ${style.now_movie_list1}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie60} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>스노우 퍼핀즈</Card.Title>
                <Card.Text>70분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie61} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>스즈메의 문단속: 다녀왔어</Card.Title>
                <Card.Text>122분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie62} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>애프터: 유혹의 끝</Card.Title>
                <Card.Text>93분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie63} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>오펜하이머</Card.Title>
                <Card.Text>180분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie64} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
              <Card.Title>외계+인 2부</Card.Title>
                <Card.Text>122분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`now_movie_list2 ${style.now_movie_list2}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie65} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>장인과 사위</Card.Title>
                <Card.Text>95분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie66} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>노량: 죽음의 바다</Card.Title>
                <Card.Text>152분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
        </div>

        <div className={`mv_lastIMG2 ${style.mv_lastIMG2}`}>
          <ul>
            <li><a href='#'><img src={BobMarley_OneLove} alt="BobMarley_OneLove" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MovieNext;