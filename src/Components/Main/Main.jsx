import './Main.css';
import '../../App.css';
import Home from '../Content/Home';
import Projects from '../Content/Projects';
import Downloads from '../Content/Downloads';
import About from '../Content/About';
import Contact from '../Content/Contact';
import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';

function updateTheme(){
    return;
}

function initializeTheme(){
    return;
}

function Main(){
    const [theme,setTheme] = useReducer(updateTheme,initializeTheme);
    return (
        <main>
            <Routes>
              <Route path="/" element={<Home theme={theme}/>} />
              <Route path="/Projects" element={<Projects theme={theme}/>} />
              <Route path="/Downloads" element={<Downloads theme={theme}/>} />
              <Route path="/About" element={<About theme={theme}/>} />
              <Route path="/Contact" element={<Contact theme={theme}/>} />
            </Routes>
        </main>
    );
}

export default Main;