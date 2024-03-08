import React from 'react';
import styles from './main.module.css';
import { EventBanner } from '../eventBanner/eventBanner';
import Movie from '../movies/movie'; // 'default'로 가져옴

const MovieMain = () => {
  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        <Movie /> {/* 'Movie' 컴포넌트로 사용 */}
      </main>
    </>
  );
};

export default MovieMain;