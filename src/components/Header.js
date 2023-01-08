import React, {useContext, useState} from "react";
import {Link,NavLink,useNavigate} from "react-router-dom";
import {LanguageContext} from "../Context";

const Header = ({changeTheme}) => {

    const [mode,setMode] = useState(JSON.parse(localStorage.getItem('mode') || false))
    const [value,setValue] = useState('')

    // const  fn = (mode) => {
    //     changeTheme(mode)
    //     setMode(!mode)
    // }

    const navigate = useNavigate()
    const {setLanguage} = useContext(LanguageContext)

    const handleClick =(name) => {
       if (name !== "") {
           navigate(`/movies/search-results/${name}`)
       }
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                        <Link to={"/"} className="header-logo">
                            <h1>LOGO</h1>
                        </Link>
                    <div className='header--search'>
                        <input onChange={(e) => setValue(e.target.value)} type="text"/>
                        <button onClick={() => handleClick(value)}>search</button>
                    </div>

                    <div className="right-side">
                        <nav className="header-nav">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={"/recipes"}>Recipes</NavLink>
                            <NavLink to={"/popular"}>Popular</NavLink>
                            <NavLink to={"/topRated"}>Top Rated</NavLink>
                            <NavLink to={"/todo"}>To Do</NavLink>
                        </nav>
                        {/*<button onClick={() => fn(mode)} className="dark-mode" style={{*/}
                        {/*    background: mode ? "white" : "",*/}
                        {/*    color: mode ? "#070707" : "",*/}
                        {/*}}>dark mode</button>*/}

                        <select style={{
                            color:"black"
                        }} onChange={(e) => setLanguage(e.target.value)} name="" id="">
                            <option value="ru-RU">Русский</option>
                            <option value="en-US">English</option>
                            <option value="tr-TR">Turkce</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header