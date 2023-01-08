import React from 'react';
import Slider from "react-slick";
import no from "../../img/noName.webp"
import {Link} from "react-router-dom";

const CastComponent = ({cast,el}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    cast.map(el => (
                        <Link to={`/actors/actor-info/${el.id}`}>
                        <div>
                               {
                                   el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`} alt=""/> :
                                       <img src={no} width={150} alt=""/>
                               }
                            <p>{el.name}</p>
                        </div>
                        </Link>
                    ))
                }
            </Slider>
        </div>
    );
};

export default CastComponent

