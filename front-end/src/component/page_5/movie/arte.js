import React, { useEffect, useRef, useState } from "react";
import style from "../../../styles/page_5/arte.module.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";
import ApiService from "../../../ApiService";

//이미지

import movie8 from '../../../assets/page_5/movie8.jpg';
import movie12 from '../../../assets/page_5/movie12.jpg';
import movie13 from '../../../assets/page_5/movie13.jpg';
import movie14 from '../../../assets/page_5/movie14.jpg';
import movie15 from '../../../assets/page_5/movie15.jpg';
import movie37 from '../../../assets/page_5/movie37.jpg';
import movie69 from '../../../assets/page_5/movie69.jpg';
import movie70 from '../../../assets/page_5/movie70.jpg';
import movie71 from '../../../assets/page_5/movie71.jpg';
import movie72 from '../../../assets/page_5/movie72.jpg';


import TheBraveBeluga from '../../../assets/page_5/TheBraveBeluga.png';


function MovieArte() {
  
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const handleButtonClick = (arte_id) => {
    // 버튼을 클릭하면 '/detail' 경로로 이동합니다.
    console.log("arte_id = " + arte_id);
    history.push("/movieDetail3/"+arte_id);
  };

  const [moviesarte, setMoviesarte] = useState([]);

  useEffect(() => {
    reloadMovieList();
  }, []);

  const reloadMovieList = () => {
    ApiService.fetchMovie3()
      .then((res) => {
        console.log("test" + res);
        setMoviesarte(res.data);
      })
      .catch((err) => {
        console.log("reloadMovieList() Error!!", err);
      });
  };

  const categoryMap3 = {
    1: [],
    2: [],
  };

  console.log(categoryMap3)
  moviesarte.forEach((movie) => {
    categoryMap3[movie.arte_category]?.push(movie);
  });

  return (
    <>
      <div className={`movie_list_wrap ${style.movie_list_wrap}`}>
           
      <div className={`arte_movie_list ${style.arte_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap3[1].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.arte_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.arte_title}</Card.Title>
                      <Button className={`primary_button4 ${style.primary_button4}`}  onClick={() => handleButtonClick(movie.arte_id)}>상세정보</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>

            <div className={`arte_movie_list ${style.arte_movie_list}`} style={{ display: 'flex', justifyContent: 'center' }}>
              {categoryMap3[2].slice(0, 5).map((movie, index) => (
                  <Card key={index} style={{ width: '202px', margin: '0 10px' }}>
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/page_5/${movie.arte_image}`} style={{ width: '200px', height: 'auto' }} />
                    <Card.Body>
                    <Card.Title style={{ fontSize: "15px",fontWeight: "bold" }}>{movie.arte_title}</Card.Title>
                      <Card.Text>{movie.arte_time}분</Card.Text>
                      <Button className={`primary_button4 ${style.primary_button4}`}  onClick={() => handleButtonClick(movie.arte_id)} >상세정보</Button>
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

export default MovieArte;