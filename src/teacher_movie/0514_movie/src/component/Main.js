import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../sub/Movie';
import '../css/MovieList.css';

class Main extends Component {
  //1단계 프로그램이 시작하는 단계
  //constructor(생성자) - 어서오세요~
  state = { //상태값 관리
    isLoading:true,
    movies:[], //영화정보가 데이터 로딩되는 곳
  };

  //axios.get을 사용하여 데이터를 불러오면 로딩 시간이 느리기 때문에
  //비동기 방식 async, await 을 사용해야 한다.
  getMovies = async()=>{
    const{
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=raing'); //영화 평점순으로 데이터를 로딩한다.
  
    console.log(movies); //콘솔창에 무비데이터 출력 확인


    this.setState({movies, isLoading:false}); 
}

  // 생명 주기함수로서 화면 render링이 끝나고 나서 실행되는 함수
  componentDidMount(){
    // setTimeout(()=>{
    //   this.setState({isLoading:false}); //3초 뒤에 true값을 false변경한다.
    // },4000);
    this.getMovies();
  }

  render() {
    //2단계 화면에 표시될 정보가 나오는 단계
    //render = componentDidMount 무엇을 도와드릴까요~
    const {isLoading, movies} = this.state;

    //3단계 사용자가 입력, dom정보가 수정되면 업데이트 되는 단계
    //componentDidUpdate 질문시 내용 설명을 친절하게 해준다. 

    //4단계 프로그램 종료시 실행
    //componentWillUnmount 또 오세요. 감사합니다. 안녕히 가세요.

    return (
      <div>
        {/* 방법1. 문자로 표시 {isLoading?'Loading...':'데이터 로딩 완료. 준비끝~'} */}
        {/* 방법2. 이미지로 표현 */}
        {/*
          {isLoading?<img src={`${process.env.PUBLIC_URL}/images/loader.jpg`} alt="로딩중" className="loading_img" />
        */}

        {isLoading?<img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt="로딩중" className="loader_icon" />:
          (<section>
            <ul className="movie_List">
            {movies.map((movie)=>
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
            )}
            </ul>
          </section>)
        }
      </div>
    );
  }
}

export default Main;