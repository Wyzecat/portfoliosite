import './ProjectContainer.css';
import '../../../App.css';

function ProjectCard(props){
    let cardclass = "projectCard ";
    cardclass += props.position;
    let textclass = "projectDescription"
    textclass += props.position;
    return(
    <>
        <div className={textclass}>
            <p>{props.text}</p>
        </div>
        <div className={cardclass}>
            <img className='cardImg' src={props.path} />
            <div className='cardText'>
                <p>{props.name}</p>
            </div>
        </div>
    </>
    )
}

export default ProjectCard;