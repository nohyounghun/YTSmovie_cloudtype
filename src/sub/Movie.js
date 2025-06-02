import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/Movie.module.css';

function Movie({ poster, title, year, genres, summary, rating }) {
  return (
    <li className={styles.movie_item}>
      <Link
        to={{
          pathname: '/movie-detail',
          state: { poster, title, year, genres, summary, rating },
        }}
        className={styles.movie_link}
      >
        <img src={poster} alt={title} />
        <h3>{title}</h3>
        <p>{year}</p>
        {genres && <p className={styles.genres}>{genres.join(', ')}</p>}
        <p className={styles.summary}>{summary.slice(0, 150)}...</p>
        <p className={styles.rating}>Rating: {rating}</p>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string), // genres는 필수가 아닐 수도 있으므로 isRequired 제거
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;