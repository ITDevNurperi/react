import React from 'react';
import {AiOutlineStar} from "react-icons/ai";

const PopularCard = ({el}) => {
    return (
        <div className="card">
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            <h2>{el.original_title}</h2>
           <div>
               <p>{el.vote_average}</p>
               <div>
                   <AiOutlineStar/>
                   <AiOutlineStar/>
                   <AiOutlineStar/>
                   <AiOutlineStar/>
                   <AiOutlineStar/>
               </div>
           </div>
        </div>
    );
};

export default PopularCard;