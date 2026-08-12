import './Main.css';
import '../../App.css';
import Home from '../Content/Home';
import Projects from '../Content/Projects';
import Downloads from '../Content/Downloads';
import About from '../Content/About';
import Contact from '../Content/Contact';
import { Route, Routes } from 'react-router-dom';

function Main(){
    return (
        <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Downloads" element={<Downloads/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Contact/>} />
            </Routes>
        </main>
    );
}

export default Main;