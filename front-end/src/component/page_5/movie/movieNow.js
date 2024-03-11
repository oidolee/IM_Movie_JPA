import React, { useRef, useState } from 'react';
import style from "../../../styles/page_5/movieNext.module.css";
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
import movie6 from '../../../assets/page_5/movie6.jpg';
import movie7 from '../../../assets/page_5/movie7.jpg';
import movie8 from '../../../assets/page_5/movie8.jpg';
import movie9 from '../../../assets/page_5/movie9.jpg';
import movie10 from '../../../assets/page_5/movie10.jpg';
import movie11 from '../../../assets/page_5/movie11.jpg';
import movie12 from '../../../assets/page_5/movie12.jpg';
import movie13 from '../../../assets/page_5/movie13.jpg';
import movie14 from '../../../assets/page_5/movie14.jpg';
import movie15 from '../../../assets/page_5/movie15.jpg';
import movie16 from '../../../assets/page_5/movie16.jpg';
import movie17 from '../../../assets/page_5/movie17.jpg';
import movie18 from '../../../assets/page_5/movie18.jpg';
import movie19 from '../../../assets/page_5/movie19.jpg';
import movie20 from '../../../assets/page_5/movie20.jpg';
import movie21 from '../../../assets/page_5/movie21.jpg';
import movie22 from '../../../assets/page_5/movie22.jpg';
import movie23 from '../../../assets/page_5/movie23.jpg';
import movie24 from '../../../assets/page_5/movie24.jpg';
import movie25 from '../../../assets/page_5/movie25.jpg';
import movie26 from '../../../assets/page_5/movie26.jpg';
import movie27 from '../../../assets/page_5/movie27.jpg';
import movie28 from '../../../assets/page_5/movie28.jpg';
import movie29 from '../../../assets/page_5/movie29.jpg';
import movie30 from '../../../assets/page_5/movie30.jpg';
import movie31 from '../../../assets/page_5/movie31.jpg';
import movie32 from '../../../assets/page_5/movie32.jpg';
import movie33 from '../../../assets/page_5/movie33.jpg';
import movie34 from '../../../assets/page_5/movie34.jpg';
import movie35 from '../../../assets/page_5/movie35.jpg';
import movie36 from '../../../assets/page_5/movie36.jpg';
import movie37 from '../../../assets/page_5/movie37.jpg';
import movie38 from '../../../assets/page_5/movie38.jpg';
import movie39 from '../../../assets/page_5/movie39.jpg';
import movie40 from '../../../assets/page_5/movie40.jpg';
import movie41 from '../../../assets/page_5/movie41.jpg';
import movie42 from '../../../assets/page_5/movie42.jpg';
import movie43 from '../../../assets/page_5/movie43.jpg';
import movie44 from '../../../assets/page_5/movie44.jpg';
import movie45 from '../../../assets/page_5/movie45.jpg';
import movie46 from '../../../assets/page_5/movie46.jpg';
import movie47 from '../../../assets/page_5/movie47.jpg';
import movie48 from '../../../assets/page_5/movie48.jpg';
import movie49 from '../../../assets/page_5/movie49.jpg';
import movie50 from '../../../assets/page_5/movie50.jpg';


import TheBraveBeluga from '../../../assets/page_5/TheBraveBeluga.png';





function MovieNext() {
  const swiperRef = useRef(null);
  const [isPlayActive, setIsPlayActive] = useState(true);

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
            <div className={`next_movie_tit ${style.next_movie_tit}`}>
              <label for="ml_title2">현재상영작</label>
            </div>  

            <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
              <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie6} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>파묘</Card.Title>
                <Card.Text>134분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie7} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>듄: 파트2</Card.Title>
                <Card.Text>165분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie8} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>가여운 것들</Card.Title>
                <Card.Text>141분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie9} style={{ width: '200px', height: 'auto' }}  />
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

          <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie10} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>마담 웹</Card.Title>
                <Card.Text>116분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie13} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>레이니 데이 인 뉴욕</Card.Title>
                <Card.Text>92분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie16} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>돌핀</Card.Title>
                <Card.Text>90분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie17} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>[위드키즈]용감한 돌고래 벨루와 바닷속 친구들</Card.Title>
                <Card.Text>82분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie18} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>로봇 드림 </Card.Title>
                <Card.Text>102분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie19} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>레이징 그레이스</Card.Title>
                <Card.Text>104분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie21} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>화녀</Card.Title>
                <Card.Text>103분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie20} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>인어공주: 마법물약의 비밀</Card.Title>
                <Card.Text>82분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie22} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>극장판 스파이 패밀리 코드 : 화이트</Card.Title>
                <Card.Text>110분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie23} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>당신이 잠든 사이 </Card.Title>
                <Card.Text>99분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie15} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>조용한 이주</Card.Title>
                <Card.Text>103분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie24} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>왓츠 러브</Card.Title>
                <Card.Text>109분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie25} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>리볼버 릴리</Card.Title>
                <Card.Text>139분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie26} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>브레이브 온 파이어</Card.Title>
                <Card.Text>80분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie27} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>이승윤 콘서트 도킹 : 리프트오프 </Card.Title>
                <Card.Text>D-12</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie28} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>3일의 휴가(수화)</Card.Title>
                <Card.Text>105분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie29} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>악은 존재하지 않는다</Card.Title>
                <Card.Text>106분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie30} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>댓글부대</Card.Title>
                <Card.Text>109분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie31} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>1980</Card.Title>
                <Card.Text>99분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie32} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>드림쏭3</Card.Title>
                <Card.Text>87분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie33} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>검치호</Card.Title>
                <Card.Text>85분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie34} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>[위드키즈]래빗스쿨 2: 부활절 대소동</Card.Title>
                <Card.Text>76분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie35} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>애니멀 킹덤</Card.Title>
                <Card.Text>127분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie36} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>유미의 세포들 더 무비</Card.Title>
                <Card.Text>D-24</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie37} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>꽃다발 같은 사랑을 했다</Card.Title>
                <Card.Text>123분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie38} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>어게인 1997</Card.Title>
                <Card.Text>103분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie39} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>쿵푸팬더4</Card.Title>
                <Card.Text>93분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie40} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>범죄도시4</Card.Title>
                <Card.Text>109분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie41} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>바람의 세월</Card.Title>
                <Card.Text>105분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie42} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>생츄어리 3 : 웜뱃! 엉덩이 히어로 </Card.Title>
                <Card.Text>87분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list ${style.next_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie43} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>고스트버스터즈: 오싹한 뉴욕</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie44} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>몬스터 프렌즈</Card.Title>
                <Card.Text>76분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie45} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>기동전사 건담 SEED FREEDOM</Card.Title>
                <Card.Text>124분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie46} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>비키퍼</Card.Title>
                <Card.Text>105분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px'}}>
              <Card.Img variant="top" src={movie47} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>마더스 </Card.Title>
                <Card.Text>94분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>        
        </div>

        <div className={`next_movie_list1 ${style.next_movie_list1}`}  style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie48} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>오멘: 저주의 시작</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie49} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>은하수</Card.Title>
                <Card.Text>104분</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: '202px' ,margin: '0 10px' }}>
              <Card.Img variant="top" src={movie50} style={{ width: '200px', height: 'auto' }}  />
              <Card.Body>
                <Card.Title>위키드</Card.Title>
                <Card.Text>D-262</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>  
        </div>

        <div className={`mv_lastIMG2 ${style.mv_lastIMG2}`}>
          <ul>
            <li><a href='#'><img src={TheBraveBeluga} alt="TheBraveBeluga" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MovieNext;