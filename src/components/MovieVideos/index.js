import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";
import {LanguageContext} from "../../Context";

const MoveVideos = ({movieID}) => {
    const [videos,setVideos] = useState([])
    const {language} = useContext(LanguageContext)

    const getVideos = async (id,apiKey) => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=${language}`)
        const {data} = await url
        await setVideos(data.results)
    }

    useEffect(() =>{
        getVideos(movieID,APIKEY)
    },[language])

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div>
           <Slider {...settings}>
               {
                   videos.map(el => (
                       <div>
                           <iframe width="360" height="215" src={`https://www.youtube.com/embed/${el.key}`}
                                   title="YouTube video player" frameBorder="0"
                                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                   allowFullScreen></iframe>
                       </div>
                   ))
               }
           </Slider>
        </div>
    );
};

export default MoveVideos;


// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US