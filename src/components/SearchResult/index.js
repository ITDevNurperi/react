import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../lib/ApiKey";
import MovieCard from "../pages/MovieCard";
import {LanguageContext} from "../../Context";
import Loader from "../../Loader";

const SearchResult = () => {

    const {movieName} = useParams()
    const [result,setResult] = useState([])
    const [totalPages,setTotalPages] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    const {language} = useContext(LanguageContext)

    const getResults = async (name, apiKey) => {
        setResult([])
        try {
            const  url = axios (`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${name}&language=${language}&page=${currentPage}`)
            const {data} = await url
            setTimeout(() => {
                setResult(data.results)
                setTotalPages(data.total_pages)
            },1000)
            window.scroll(0,0)
        }catch (e) {
            console.log(e)
        }
       }

    console.log(result)

    useEffect(() => {
        getResults(movieName,APIKEY)
    },[movieName,language,currentPage])

    useEffect(() => {
        setCurrentPage(1)
    },[movieName])

    if (result.length === 0 ){
        return <Loader/>
    }

    return (
        <div id='popular'>
            <div className='container'>
                <div className='popular'>
                    {
                        result.map(el => <MovieCard el={el}/>)
                    }
                </div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <button style={{
                        visibility: currentPage === 1 ? "hidden" : "visible"
                    }} onClick={() => setCurrentPage(currentPage - 1)} className='btn'>prev</button>
                    <h2 style={{
                        fontSize:"20px"
                    }}>{currentPage}/{totalPages}</h2>
                    <button style={{
                        display: currentPage === totalPages ? "none" : "block"
                    }} onClick={() => setCurrentPage(currentPage + 1)} className='btn'>next</button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;

//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher