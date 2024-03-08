import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './detail.module.css';

class Detail extends Component {
  render() {
    const { movies, match } = this.props;
    const { movieId } = match.params;
    const movie = movies.find(movie => movie.id === parseInt(movieId));

    if (!movie) {
      return <div>영화를 찾을 수 없습니다.</div>;
    }

    return (
      <div className={styles.container}>
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>개봉일: {movie.date}</p>
        <p>상영 시간: {movie.time}</p>
        <p>연령제한: {movie.age}</p>
        <p>관람객수: {movie.visitor}</p>
        <p>줄거리: {movie.plot}</p>
      </div>
    );
  }
}

export default withRouter(Detail);
