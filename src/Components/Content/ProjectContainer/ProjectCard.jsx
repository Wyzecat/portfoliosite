import './ProjectContainer.css';
import '../../../App.css';
import { useState } from 'react';
import LinkButtons from './LinkButton';

function ProjectCard(props){
    let bodyclass = "cardBody ";
    bodyclass += props.position;
    const [opened,setOpened] = useState('collapsed')
    const [hovered,setHovered] = useState("notHovered");
    return(
    <div className={bodyclass}>
        <div className={`projectCard ${hovered}`}
        onMouseOver={() => setHovered("true")}
        onMouseOut={() => setHovered("false")}
        >
            {/*<img className='cardImg' src={props.path} />*/}
            <div className='cardText'  onClick={()=>{
                if(opened == "collapsed") setOpened('expanded');
                else setOpened("collapsed");
            }}>
                <h2 className='projectTitle'>{props.name}</h2>
                <p className='minorDesc'>{props.minor}</p>
            </div>
            <div className={`content ${opened} ${hovered}`}
            onMouseOver={() => setHovered("true")}
            onMouseOut={() => setHovered("false")}>
                <img className='cardImg' src={props.path} />
                <div className='cardRight'>
                    {props.text}
                    {/*props.url != null ? <a href={props.url} className='download' target="_blank">{props.url.includes("github")? <p className="siteName">Github</p> : <p className="siteName">Source Code</p>} <p className="chevron">❯</p></a> : <></>*/}
                    <LinkButtons links={props.links} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;