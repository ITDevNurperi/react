import React, {useState} from 'react';
import {AiTwotoneStar} from "react-icons/ai";

const ModalWindow = ({el,setModal,modal}) => {

    const [star,setStar] = useState(0)
    const arr = [1,2,3,4,5,6,7]

    return (
       <>
           <div onClick={() => setModal(true)} className="detail-page--img">
               <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} width={300} alt=""/>
           </div>
           <div onClick={() => setModal(false)} style={{display: modal ? "block" : "none"}} className="blur-modal"></div>
           <div style={{
               transform: modal ? "scale(1)" : "scale(0)",
               // transition: ".1s",
           }} className="modal">
               <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt=""/>
               <div className="modal--items">
                   <div className="modal--items--close-modal" onClick={() => setModal(false)}>&times;</div>
                   <h4>{el.title}</h4>
                   <div className="modal--items--stars">
                       {
                           arr.map(el => (
                                <AiTwotoneStar onClick={() => setStar(el)} style={{
                                    color: star >= el ? "yellow" : ""
                                }}/>
                           ))
                       }
                   </div>
               </div>
           </div>
       </>
    );
};

export default ModalWindow;