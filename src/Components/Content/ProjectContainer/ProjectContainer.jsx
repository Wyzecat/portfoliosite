import './ProjectContainer.css';
import '../../../App.css';
import placeholder from '../../../Media/phgreen.png'
import ProjectCard from './ProjectCard';

function ProjectContainer(props){
    return(
        <div className='projectContainer'>
            <ProjectCard path={placeholder} position="p1" name="Little Lemon Capstone Website" text="Placeholder text" minor="Placeholder Text" status={props.status} updateStatus={props.updateStatus} links={[{text:'Github', url:'https://github.com/Wyzecat/little-lemon'}]}/>
            <ProjectCard path={placeholder} position="p2" name="Portfolio Website" text="Placeholder text" minor="Placeholder Text" status={props.status} updateStatus={props.updateStatus} links={[{text:'Github', url:"https://github.com/Wyzecat/portfoliosite"}]}/>
            {/*<ProjectCard path={placeholder} position="p3" name="Project 3" text="Placeholder text" minor="Placeholder Text" status={props.status} updateStatus={props.updateStatus}/>
            <ProjectCard path={placeholder} position="p4" name="Project 4" text="Placeholder text" minor="Placeholder Text" status={props.status} updateStatus={props.updateStatus}/>*/}
        </div>
    )
}

export default ProjectContainer;