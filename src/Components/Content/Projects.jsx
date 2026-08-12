import './Content.css';
import '../../App.css';
import ProjectContainer from './ProjectContainer/ProjectContainer';
function Projects(){
    return (
        <section className='Projects'>
            <h2 className='TitleTxt'>MY PROJECTS</h2>
            <hr/>
            <p>Below are some of the projects I have worked on or am currently working on.</p>
            <ProjectContainer/>
        </section>
    );
}

export default Projects;