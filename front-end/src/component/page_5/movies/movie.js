import React from 'react';
import { Link } from 'react-router-dom';
import styles from './movie.module.css';
import movie1 from '../../../assets/page_5/movie1.jpg'
import movie2 from '../../../assets/page_5/movie2.jpg'
import movie3 from '../../../assets/page_5/movie3.jpg'
import movie4 from '../../../assets/page_5/movie4.jpg'
import movie5 from '../../../assets/page_5/movie5.jpg'
import movie6 from '../../../assets/page_5/movie6.jpg'
import movie7 from '../../../assets/page_5/movie7.jpg'
import movie8 from '../../../assets/page_5/movie8.jpg'
import movie9 from '../../../assets/page_5/movie9.jpg'
import movie10 from '../../../assets/page_5/movie10.jpg'

const Movie = () => {
  return (
    <React.Fragment>
    <div className={'product ${styles.product}'}>
      <div className={styles.productItem}>
        <Link to="./detail.js">
          <div className={styles.product_image}>
            <img src={movie1} alt="movie" />
          </div>
          <div className={styles.store}>
            <span>파묘</span>
          </div>
          <div className={styles.product_name}>
            <span>134분</span>
          </div>
        </Link>
      </div>

      <div className={styles.productItem}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src={movie2} alt="movie" />
          </div>
          <div className={styles.store}>
            <span>듄:파트2</span>
          </div>
          <div className={styles.product_name}>
            <span>165분</span>
          </div>
        </Link>
      </div>

      <div className={styles.productItem}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src={movie3} alt="movie" />
          </div>
          <div className={styles.store}>
            <span>윙카</span>
          </div>
          <div className={styles.product_name}>
            <span>116분</span>
          </div>
        </Link>
      </div>

      <div className={styles.productItem}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src={movie4} alt="movie" />
          </div>
          <div className={styles.store}>
            <span>건국전쟁</span>
          </div>
          <div className={styles.product_name}>
            <span>100분</span>
          </div>
        </Link>
      </div>

      <div className={styles.productItem}>
        <Link to="#">
          <div className={styles.product_image}>
            <img src={movie5} alt="movie" />
          </div>
          <div className={styles.store}>
            <span>[위드키즈]브레드이발소:셀럽 인 베이커리타운</span>
          </div>
          <div className={styles.product_name}>
            <span>73분</span>
          </div>
        </Link>
      </div>
    </div>


    <div className={styles.product}>
    <div className={styles.productItem}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src={movie6} alt="movie" />
        </div>
        <div className={styles.store}>
          <span>가여운 것들</span>
        </div>
        <div className={styles.product_name}>
          <span>141분</span>
        </div>
      </Link>
    </div>

    <div className={styles.productItem}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src={movie7} alt="movie" />
        </div>
        <div className={styles.store}>
          <span>패스트 라이브즈</span>
        </div>
        <div className={styles.product_name}>
          <span>105분</span>
        </div>
      </Link>
    </div>

    <div className={styles.productItem}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src={movie8} alt="movie" />
        </div>
        <div className={styles.store}>
          <span>벙커 게임</span>
        </div>
        <div className={styles.product_name}>
          <span>95분</span>
        </div>
      </Link>
    </div>

    <div className={styles.productItem}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src={movie9} alt="movie" />
        </div>
        <div className={styles.store}>
          <span>예수는 역사다</span>
        </div>
        <div className={styles.product_name}>
          <span>113분</span>
        </div>
      </Link>
    </div>

    <div className={styles.productItem}>
      <Link to="#">
        <div className={styles.product_image}>
          <img src={movie10} alt="movie" />
        </div>
        <div className={styles.store}>
          <span>생츄어리2:쿼카가 너무해</span>
        </div>
        <div className={styles.product_name}>
          <span>87분</span>
        </div>
      </Link>
    </div>
    </div>



</React.Fragment>
  );
};

export default Movie;
