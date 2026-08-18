import './ProjectContainer.css';
import '../../../App.css';

function ProjectCard(props){
    let cardclass = "projectCard ";
    cardclass += props.position;
    let textclass = "projectDescription "
    textclass += props.position;
    return(
    <>
        <div className={textclass}>
            <h3 className='projectDescriptionTitle'>{props.name}</h3>
            <p className="projectDescriptionText">{props.text}</p>
            <button className='openModal' onClick={()=>{
                props.updateStatus(props.name)}
            }>Click for More</button>
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