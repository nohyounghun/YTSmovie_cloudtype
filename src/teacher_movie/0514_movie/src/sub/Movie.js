import React from 'react';
import PropTypes from 'prop-types'; //데이터 타입 검사
import {Link} from 'react-router-dom';

function Movie({poster, title, year, genres, summary, rating}) {
  return (
    <li>
      <Link 
      to="/movie-detail"
      state={{poster, title, year, genres, summary, rating}}
      >
        <img src={poster} alt={title} />
        <h3 className="movie_title">{title}</h3>
        <p className="movie_year">출시년도 : {year}</p>
        <p className="movie_genres">장르 : {genres}</p>

        {/* 줄거리는 200자 이상시 생략기호 나오게 한다. */}
        <p>줄거리 : {summary.slice(0, 230)}...</p>
        <p className="rating">평점 : {rating}</p>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number, // 선택적이면 isRequired 제거
};
export default Movie;