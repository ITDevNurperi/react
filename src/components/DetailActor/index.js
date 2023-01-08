import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";
import {LanguageContext} from "../../Context";


const DetailActor = () => {

    const [detailActors, setDetailActors] = useState({})
    const [castMovie, setCastMovie] = useState([])
    const {language} = useContext(LanguageContext)
    const [viewMore, setViewMore] = useState(400)

    const {actorId} = useParams()

    const getActor = async (id, ApiKey) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${ApiKey}&language=${language}`)
            const {data} = await url
            await setDetailActors(data)
        } catch (e) {
            console.log(e)
        }
    }

    const getDetailCastMovies = async (id, ApiKey) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${ApiKey}&language=${language}`)
            const {data} = await url
            await setCastMovie(data.cast.slice(0, 10))
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        getActor(actorId, APIKEY)
        getDetailCastMovies(actorId, APIKEY)
    }, [language])

    const {profile_path, place_of_birth, birthday, biography, name} = detailActors
    const viewMoreFn =(text) => {
        viewMore === 400?  setViewMore(text.length) : setViewMore(400)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
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

    console.log("detailActors", detailActors)
    console.log("castMovie", castMovie)



    return (
        <div id='detail-cast'>
            <div className="container">
                <div className="detail-cast">
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${profile_path}`} alt=""/>
                    </div>
                    <div className="detail-cast--desc">
                        <h1>{name}</h1>
                        <h4>{place_of_birth}</h4>
                        <h4>{birthday}</h4>
                        <h3>Биография</h3>
                        <p>{biography ? biography.slice(0,viewMore) : biography}</p>
                        {
                           biography ? biography.length> 400 ? <span onClick={() => viewMoreFn(biography)} style={{color:"aqua", cursor:"grab"}}>{viewMore === 400 ? "Читать ешё..." : "Закрыть"}</span> : "" : ""
                        }
                    </div>
                </div>

                <Slider {...settings}>
                    {
                        castMovie.filter(el => el.poster_path).map(el =>(
                            <div>
                                <Link to={`/movies/movie-info/${el.id}`}>
                                    <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`} alt=""/>
                                </Link>
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default DetailActor;