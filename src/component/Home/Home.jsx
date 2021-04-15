import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../service/index';
import RBCarousel  from 'react-bootstrap-carousel';
import image from '../image/maxresdefault.jpg';
import '../../css/index.css';

function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
        }
        fetchAPI();
    }, []);
    const movies = nowPlaying.slice(0, 6).map((item ,index) => {
        return (
            <div key={index} style={{height:"500px"}}>
                <div className="carousel-center" >
                    <img   src={item.backPoster} alt={item.title } className="img-fluid" />
                </div>
                <div className="carousel-caption" style={{textAlign:"center", fontSize:"35px"}}>
                    {item.title}
                </div>
            </div>
        );
    });

    return (
        <div className="">
                    <RBCarousel 
                        autoplay={true}
                        pauseOnVisibility={true}
                        slidesshowSpeed={5000}
                        version={4}
                        indicators={false}
                    >
                        {movies}
                    </RBCarousel >
        </div>
    )
}

export default Home;