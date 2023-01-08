import React from 'react';
import {AiOutlineStar} from "react-icons/ai";
import {Link, useParams} from "react-router-dom";



const MovieCard = ({el}) => {


    return (
        <div className="card">
            <Link  to={`/movies/movie-info/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </Link>
            <h2>{el.title}</h2>
            <div>
                <p>{el.vote_average}</p>
                {/*<div className="stars">*/}
                {/*    <div className="stars-color" style={{background: "yellow", width: el.vote_average * 10}}></div>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*    <AiOutlineStar className="star"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default MovieCard;