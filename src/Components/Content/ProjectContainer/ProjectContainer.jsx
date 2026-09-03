import './ProjectContainer.css';
import '../../../App.css';
import placeholder from '../../../Media/phgreen.png'
import placeholderBig from '../../../Media/phgreenbig.png'
import ProjectCard from './ProjectCard';
import littleLemon from './ProjectFiles/LittleLemon.json';
import portfolioWebsite from './ProjectFiles/PortfolioWebsite.json'

function ProjectContainer(props){
    return(
        <div className='projectContainer'>
            <ProjectCard path={placeholder} pathBig={placeholderBig} position="p1" images={littleLemon.images} name={littleLemon.name} text={littleLemon.text} minor={littleLemon.minor} status={props.status} updateStatus={props.updateStatus} linkArray={littleLemon.links}/>
            <ProjectCard path={placeholder} pathBig={placeholderBig} position="p2" images={portfolioWebsite.images} name={portfolioWebsite.name} text={portfolioWebsite.text} minor={portfolioWebsite.minor} status={props.status} updateStatus={props.updateStatus} linkArray={portfolioWebsite.links}/>
        </div>
    )
}

export default ProjectContainer;