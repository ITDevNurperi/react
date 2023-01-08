import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import Slider from "react-slick";
import CastComponent from "./CastComponent";
import ModalWindow from "./ModalWindow";
import MovieVideos from "../MovieVideos";
import {LanguageContext} from "../../Context";



const DetailPage = () => {
    const {movieId} = useParams()
    const [detail, setDetail] = useState({})
    const [cast,setCast] = useState([])
    const {language} = useContext(LanguageContext)
    const [modal,setModal] = useState(false)



    const getDetail = async (id, ApiKey) => {
        try {
            const link = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=${language}`)
            const {data} = await link
            await setDetail(data)

        } catch (e) {
            console.log(e)
        }
    }


    const getCast = async (id, ApiKey) => {
        try {
            const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}&language=${language}`)
            const {data} = await url
            await setCast(data.cast)
        } catch (e) {
            console.log(e)
        }
    }


    console.log(cast)


    const {backdrop_path, title, poster_path, release_date, vote_average, runtime,overview} = detail

    useEffect(() => {
        getDetail(movieId,APIKEY)
        getCast(movieId,APIKEY)
    }, [language])


    return (
      <>
          <div id="detail" style={{
              background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat left/cover`
          }}>
              <div className="container">
                  <div className="detail-page">
                      <ModalWindow el={detail} setModal={setModal} modal={modal}/>
                      <div className="detail-page--description">
                          <h1>{title} ({release_date})</h1>

                          <div className="rating">
                              {Math.floor(vote_average)}%
                          </div>

                          <h4 style={{margin:"20px 0"}}>{ Math.floor(runtime / 60) > 0 ? Math.floor(runtime / 60) + "h" : ""} {runtime % 60}min</h4>
                          <p>{overview}</p>
                          <h3>{vote_average}</h3>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container">
              <div className="cast">
                  <CastComponent cast={cast}/>
              </div>

              <div className="videos">
                  <MovieVideos movieID={movieId}/>
              </div>
          </div>
      </>
    );
};

export default DetailPage;