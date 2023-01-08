import './App.scss';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import {Routes, Route} from "react-router-dom";
import TopRated from "./components/TopRated";
import Todo from "./components/Todo/Todo";
import Home from "./components/Home";
import Popular from "./components/Popular";
import DetailPage from "./components/pages/DetailPage";
import {useState} from "react";
import DetailActor from "./components/DetailActor";
import SearchResult from "./components/SearchResult";

function App() {

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode') || false))

    const changeTheme = (mode) => {
        setMode(!mode)
        localStorage.setItem('mode',JSON.stringify(!mode))
    }

    // style={{
    //     background: mode ? "#1E1B1BFF" : "",
    //         color: mode ? "white" : "",
    // }}

    return (
        <div className="App">
            {/*<Header changeTheme={changeTheme}/>*/}

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/recipes'} element={<Recipes/>}/>
                <Route path={'/popular'} element={<Popular/>}/>
                <Route path={'/topRated'} element={<TopRated/>}/>
                <Route path={'/todo'} element={<Todo/>}/>
                <Route path={'/movies/movie-info/:movieId'} element={<DetailPage/>}/>
                <Route path={'/actors/actor-info/:actorId'} element={<DetailActor/>}/>
                <Route path={'/movies/search-results/:movieName'} element={<SearchResult/>}/>
            </Routes>
        </div>
    );
}

export default App;
