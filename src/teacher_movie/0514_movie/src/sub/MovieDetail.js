import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/MovieDetail.css';

function MovieDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  // 영화 정보가 없을 경우 이전 페이지로 이동
  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);
  
  if (!location.state) return null;
  
  const { title, year, poster, summary, genres, rating } = location.state;

  return (
    <div className="movie-detail">
      <img src={poster} alt={title} />
      <div className="movie-detail__info">
        <h1>{title}</h1>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Genres:</strong> {genres.join(', ')}</p>
        <p>{summary}</p>
        <p className="rating">{rating}</p>

        {/* 뒤로가기 버튼 */}
        <button className="back-button" onClick={() => navigate(-1)}>목록으로</button>
      </div>
    </div>
  );
}

export default MovieDetail;
