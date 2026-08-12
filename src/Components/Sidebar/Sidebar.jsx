import '../../App.css';
import SidebarButton from './SidebarButton/SidebarButton';
import QuickLinks from './QuickLinks/QuickLinks';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
function Sidebar(){
    let currPath = useLocation().pathname;
    const [status, setStatus] = useState(currPath.split('/')[1].toLowerCase());
    return (
        <nav className='Sidebar'>
            <SidebarButton link="/" name="Home" status={status} updateStatus={setStatus}/>
            <SidebarButton link="/projects" name="Projects" status={status} updateStatus={setStatus}/>
            <SidebarButton link="/downloads" name="Downloads" status={status} updateStatus={setStatus}/>
            <SidebarButton link="/about" name="About" status={status} updateStatus={setStatus}/>
            <SidebarButton link="/contact" name="Contact Me" status={status} updateStatus={setStatus}/>
            <QuickLinks />
        </nav>
    );
}

export default Sidebar; 