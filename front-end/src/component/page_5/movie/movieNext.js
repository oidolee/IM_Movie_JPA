import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import style from "../../../styles/page_5/movieNext.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ApiService from "../../../ApiService";


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

import movie6 from '../../../assets/page_5/movie6.jpg';

import TheBraveBeluga from '../../../assets/page_5/TheBraveBeluga.png';


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

  const handleButtonClick = (next_id) => {
    // 버튼을 클릭하면 '/detail' 경로로 이동합니다.
    console.log("next_id = " + next_id);
    history.push("/movieDetail4/"+next_id);
  };

  const [movienext, setMovienext] = useState([]);

  useEffect(() => {
    reloadMovieList();
  }, []);

  const reloadMovieList = () => {
    ApiService.fetchMovie2()
      .then((res) => {
        setMovienext(res.data);
      })
      .catch((err) => {
        console.log("reloadMovieList() Error:", err);
      });
  };

  const categoryMap2 = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
  };

  movienext.forEach((movie) => {
    categoryMap2[movie.next_category]?.push(movie);
  });

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
              <label for="ml_title2">상영예정작</label>
            </div>  

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[1].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}

              <Card style={{ width: '202px', margin: '0 10px' }}>
              <Card.Img variant="top" src={movie6} style={{ width: '300px', height: '500px' }}  />
              </Card>     
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[2].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[3].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[4].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[5].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[6].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)}>상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[7].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[8].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}  onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list ${style.next_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[9].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`} onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`next_movie_list2 ${style.next_movie_list2}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap2[10].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.next_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.next_title}</Card.Title>
                      <Card.Text>{movie.next_time}분</Card.Text>
                      <Button className={`primary_button3 ${style.primary_button3}`}   onClick={() => handleButtonClick(movie.next_id)} >상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
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