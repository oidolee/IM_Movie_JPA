import React, { useEffect, useRef, useState } from "react";
import style from "../../../styles/page_5/movieMain.module.css";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ApiService from "../../../ApiService";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import Swiper1 from "../../../assets/page_5_4/Swiper1.jpg";
import Swiper2 from "../../../assets/page_5_4/Swiper2.jpg";
import Swiper3 from "../../../assets/page_5_4/Swiper3.jpg";
import Swiper4 from "../../../assets/page_5_4/Swiper4.jpg";
import Swiper5 from "../../../assets/page_5_4/Swiper5.jpg";


import BobMarley_OneLove from "../../../assets/page_5/BobMarley_OneLove.jpg";

function MovieMain() {
  const swiperRef = useRef(null);
  const [isPlayActive, setIsPlayActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
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
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handleButtonClick = (movie_id) => {
    // 버튼을 클릭하면 '/detail' 경로로 이동합니다.
    console.log("movie_id = " + movie_id);
    history.push("/movieDetail/"+movie_id);
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    reloadMovieList();
  }, []);

  const reloadMovieList = () => {
    ApiService.fetchMovie()
      .then((res) => {
        console.log("test" + res);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log("reloadMovieList() Error!!", err);
      });
  };

  const categoryMap = {
    1: [],
    2: [],
    3: [],
  };
  console.log(categoryMap)
  movies.forEach((movie) => {
    categoryMap[movie.mov_category]?.push(movie);
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
            <img src={Swiper1} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper2} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper3} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper4} alt="swiper" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper5} alt="swiper" />
          </SwiperSlide>
          <div className="Main_Swiper_control_box">
            <i
              className={`bi bi-play-fill ${isPlayActive ? "moveActive" : ""}`}
              onClick={startSlide}
            ></i>
            <i
              className={`bi bi-stop-fill ${!isPlayActive ? "moveActive" : ""}`}
              onClick={stopSlide}
            ></i>
          </div>
        </Swiper>
      </div>
      
          
       {/* 현재 상영영화 (영화5개) */}
      <div className={`movie_list_wrap ${style.movie_list_wrap}`}>
        <div className={`now_movie_tit ${style.now_movie_tit}`}>
          <label for="ml_title1">
            현재 상영작 <span style={{ color: "red" }}>TOP 5</span>
          </label>
        </div>

        <div
          className={`now_movie_list ${style.now_movie_list}`}
          style={{ display: "flex", justifyContent: "center" }}
        >
         
         {categoryMap[1].slice(0, 5).map((movie, index) => (
              <Card key={index} style={{ width: "202px", margin: "0 10px" }}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.mov_image}`} style={{ width: '200px', height: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>{movie.mov_title}</Card.Title>
                  <Card.Text>{movie.mov_time}분</Card.Text>
                  <Button className={`primary_button ${style.primary_button}`} onClick={()=>handleButtonClick(movie.movie_id)}>상세정보</Button>
                </Card.Body>
              </Card>
            ))}
        </div>
       

        {/* 상영 예정작 (영화5개) */}
        <div className={`now_movie_tit ${style.now_movie_tit}`}>
          <label for="ml_title1">
            상영 예정작 <span style={{ color: "red" }}>TOP 5</span>
          </label>
        </div>
      

        <div
            className={`now_movie_list ${style.now_movie_list}`}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {categoryMap[2].slice(0, 5).map((movie, index) => (
              <Card key={index} style={{ width: "202px", margin: "0 10px" }}>
                 <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.mov_image}`} style={{ width: '200px', height: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.mov_title}</Card.Title>
                  <Card.Text>{movie.mov_time}분</Card.Text>
                  <Button className={`primary_button ${style.primary_button}`} onClick={()=>handleButtonClick(movie.movie_id)}>상세정보</Button>
                </Card.Body>
              </Card>
            ))}
          </div>

      {/* 아르떼 영화 (영화5개) */}
      <div className={`movie_list_wrap ${style.movie_list_wrap}`}>
        <div className={`now_movie_tit ${style.now_movie_tit}`}>
          <label for="ml_title1">
          아르떼 영화 <span style={{ color: "red" }}>TOP 5</span>
          </label>
        </div>

        <div
          className={`now_movie_list ${style.now_movie_list}`}
          style={{ display: "flex", justifyContent: "center" }}
        >
         
         {categoryMap[3].slice(0, 5).map((movie, index) => (
              <Card key={index} style={{ width: "202px", margin: "0 10px" }}>
                 <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.mov_image}`} style={{ width: '200px', height: 'auto' }} />
                <Card.Body>
                <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.mov_title}</Card.Title>
                  <Card.Text>{movie.mov_time}분</Card.Text>
                  <Button className={`primary_button ${style.primary_button}`} onClick={()=>handleButtonClick(movie.movie_id)}>상세정보</Button>
                </Card.Body>
              </Card>
            ))}
        </div>
        </div>
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
