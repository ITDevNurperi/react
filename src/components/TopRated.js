import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../lib/ApiKey";
import MovieCard from "./pages/MovieCard";
import Loader from "../Loader";
import {LanguageContext} from "../Context";

const TopRated = () => {

    const [topRated,setTopRated] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const {language} = useContext(LanguageContext)

    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=${currentPage}`)
        let {data} = await url
        setTimeout(() => {
            setTopRated(data.results)
            window.scroll(0,0)
        },1000)
    }

    const bottons = [1,2,3,4,5,6,7,8,9,10]

    useEffect(() => {
        getPopular()
    },[language,currentPage])


    if (topRated.length === 0) {
        return <Loader/>
    }

    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        topRated.map(el => (
                            <MovieCard el={el} key={el.id}/>
                        ))
                    }
                </div>
                <div className="popular-pagination">
                    {
                        bottons.map(el => (
                            <button style={{
                                background: el === currentPage ? "darkslategrey" : ""
                            }} onClick={() => setCurrentPage(el)}>{el}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;