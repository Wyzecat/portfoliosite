import './ProjectContainer.css';
import '../../../App.css';
import placeholder from '../../../Media/phgreen.png'
import ProjectCard from './ProjectCard';

function ProjectContainer(props){
    return(
        <div className='projectContainer'>
            <ProjectCard path={placeholder} position="p1" name="Project 1" text="Placeholder text" status={props.status} updateStatus={props.updateStatus}/>
            <ProjectCard path={placeholder} position="p2" name="Project 2" text="Placeholder text" status={props.status} updateStatus={props.updateStatus}/>
            <ProjectCard path={placeholder} position="p3" name="Project 3" text="Placeholder text" status={props.status} updateStatus={props.updateStatus}/>
            <ProjectCard path={placeholder} position="p4" name="Project 4" text="Placeholder text" status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProjectContainer;