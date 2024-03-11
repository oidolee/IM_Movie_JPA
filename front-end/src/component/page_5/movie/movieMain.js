import React, { useRef, useState } from 'react';
import style from "../../../styles/page_5/movieMain.module.css";
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

import BobMarley_OneLove from '../../../assets/page_5/BobMarley_OneLove.jpg';





function MovieMain() {
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
        <div className={`now_movie_tit ${style.now_movie_tit}`}>
          <label for="ml_title1">현재 상영작 <span style={{ color: 'red' }}>TOP 5</span></label>
        </div>    
    
        <div className={`now_movie_list ${style.now_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
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
              <Card.Title>듄:파트2</Card.Title>
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
              <Card.Title>윙카</Card.Title>
              <Card.Text>116분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie5} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>패스트 라이브즈 </Card.Title>
              <Card.Text>134분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>        
        </div>

        <div className={`now_movie_tit ${style.now_movie_tit}`}>
          <label for="ml_title1">상영 예정작 <span style={{ color: 'red' }}>TOP 5</span></label>
          </div>
       </div>

      <div className={`now_movie_list ${style.now_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie6} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>밥 말리:원 러브</Card.Title>
              <Card.Text>107분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie7} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>랜드 오브 배드</Card.Title>
              <Card.Text>113분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px' ,margin: '0 10px' }}>
            <Card.Img variant="top" src={movie8} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>메이 디셈버</Card.Title>
              <Card.Text>117분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie9} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>원 앤 온리</Card.Title>
              <Card.Text>124분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie10} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>마담 웹 </Card.Title>
              <Card.Text>116분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>        
      </div>

      <div className={`now_movie_tit ${style.now_movie_tit}`}>
          <label for="ml_title1">아르떼 영화 <span style={{ color: 'red' }}>TOP 5</span></label>
          </div>
       
          <div className={`now_movie_list ${style.now_movie_list}`}  style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie11} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>메이 디셈버</Card.Title>
              <Card.Text>117분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px', margin: '0 10px' }}>
            <Card.Img variant="top" src={movie12} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>소풍</Card.Title>
              <Card.Text>113분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '202px' ,margin: '0 10px' }}>
            <Card.Img variant="top" src={movie13} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>레이니 데이 인 뉴욕</Card.Title>
              <Card.Text>92분</Card.Text>
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

          <Card style={{ width: '202px', margin: '0 10px'}}>
            <Card.Img variant="top" src={movie15} style={{ width: '200px', height: 'auto' }}  />
            <Card.Body>
              <Card.Title>조용한 이주 </Card.Title>
              <Card.Text>103분</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>        
      </div>

      <div className={`mv_lastIMG1 ${style.mv_lastIMG1}`}>
          <ul>
            <li><a href='#'><img src={BobMarley_OneLove} alt="noitce_img_1" /></a></li>
          </ul>
      </div>

  


    </>
    );
}

export default MovieMain;
