import './Content.css';
import '../../App.css';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import Modal from './Modal/Modal';
import placeholder from '../../Media/phgreen.png';
import { useState } from 'react';

function Projects(){
    const [status,setStatus] = useState('N/A');
    return (
        <section className='Projects'>
            <div className="ProjectTextContainer">
                <h2 className='TitleTxt'>WELCOME TO MY WEBSITE</h2>
                <hr/>
                <p>Below are some of the projects I have worked on or am currently working on.</p>
            </div>
            <ProjectContainer updateStatus={setStatus} />
            <Modal title="Project 1" path={placeholder} text="Placeholder text" status={status} updateStatus={setStatus}/>
            <Modal title="Project 2" path={placeholder} text="Placeholder text" status={status} updateStatus={setStatus}/>
            <Modal title="Project 3" path={placeholder} text="Placeholder text" status={status} updateStatus={setStatus}/>
            <Modal title="Project 4" path={placeholder} text="Placeholder text" status={status} updateStatus={setStatus}/>
        </section>
    );
}

export default Projects;