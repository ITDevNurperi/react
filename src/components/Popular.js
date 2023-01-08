import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../lib/ApiKey";
import MovieCard from "./pages/MovieCard";
import {LanguageContext} from "../Context";
import Loader from "../Loader";

const Popular = () => {


    const [popular,setPopular] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const {language} = useContext(LanguageContext)
    const getPopular = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${currentPage}`)
        let {data} = await url
        setTimeout(() => {
            setPopular(data.results)
            window.scroll(0,0)
        },1000)
    }

    const bottons = [1,2,3,4,5,6,7,8,9,10]

  useEffect(() => {
      getPopular()
  },[language,currentPage])

    if (popular.length === 0) {
        return <Loader/>
    }

    return (
       <div id="popular">
           <div className="container">
               <div className="popular">
                   {
                       popular.map(el => (
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

export default Popular;