import React,{useEffect, useState} from 'react';
import {BsTrash} from "react-icons/bs";

const Home = () => {

    const [counter,setCounter] = useState(1)

    // const [sec,setSec] = useState(0)
    // const [min,setMin] = useState(0)
    // const [h,setH] = useState(0)

    const [user,setUser] = useState([])

    useEffect( () => {
        // console.log("useEffect сработал!!")


        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUser(data))


        // setTimeout(() => {
        //     setCounter(counter +1)
        // },2000)

    },[counter])

    // setInterval(() => {
    //     setH(new Date().getHours())
    //     setMin(new Date().getMinutes())
    //     setSec(new Date().getSeconds())
    // },1000)

    return (
        <div>

            <div className="container">
               <div style={{
                   padding:"110px 10px"
               }}>
                   <h1 style={{
                       paddingLeft:"24px",
                       fontSize:"30px"
                   }}>{counter}</h1>
                   <button style={{
                       color:"#40AB7E",
                       background: "transparent",
                       border: "1px solid #40AB7E",
                       borderRadius: "20px",
                       padding: "8px 8px",
                       fontSize: "15px",
                       margin:"10px 10px"
                   }} onClick={() => setCounter(counter +1)}>click</button>

                   {user.map(el => (
                       <div key={el.id}>
                           {el.name}
                           <a href={`tel: ${el.phone}`}>{el.phone}</a>
                       </div>
                   ))}
               </div>
            </div>

            {/*<div>*/}
            {/*    <h1>{h + ":" + min + ":" + sec}</h1>*/}
            {/*</div>*/}

           {/*<div className="icon">*/}
           {/*    <BsTrash/>*/}
           {/*</div>*/}
        </div>
    );
};

export default Home;