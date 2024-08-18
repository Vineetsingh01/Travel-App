import React from "react"
import './app.css'
import Navbar from'./components/Navbar/Navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Route,Routes} from "react-router-dom";
import About from "./components/About";

const App = ()=>{
    return (
        <>
        <Navbar/>
        <div><Routes>
                <Route path='/Home' Component={Home}></Route>
                <Route path='/Main' Component={Main}></Route>
                <Route path='/Footer' Component={Footer}></Route>
            </Routes>
        </div>
        <Home/>
        <Main/>
        <Footer/>
        
        </>
    )
    
}
export default App;