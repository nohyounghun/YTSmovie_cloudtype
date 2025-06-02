import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../sub/Movie';
import styles from '../css/Movie.module.css';
import '../App.css';

class Main2 extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year');
    //year 출시년도
    //rating 평점순

    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading ? (
          <img src={`${process.env.PUBLIC_URL}/images/loader.jpg`} alt='로딩중' className='loading_img' />
        ) : (
          <section>
            <ul className={styles.movie_list}>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                />
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }
}

export default Main2;