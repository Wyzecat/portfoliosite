import './ProjectContainer.css';
import '../../../App.css';
import { useState } from 'react';
import LinkButtons from './LinkButton';
import HeaderChevron from './HeaderChevron';
import ImagePicker from './ImagePicker';

function ProjectCard(props){
    let bodyclass = "cardBody ";
    bodyclass += props.position;
    const [opened,setOpened] = useState('closed')
    const [hovered,setHovered] = useState("notHovered");
    return(
    <div className={bodyclass}>
        <div className={`projectCard ${hovered}`} onMouseOver={() => setHovered("true")} onMouseOut={() => setHovered("false")} >
            <div className='cardText' onClick={()=>{
                if(opened === "closed") setOpened('open');
                else setOpened("closed");
            }}>
                <h2 className='projectTitle'>{props.name}</h2>
                <p className='minorDesc'>{props.minor}</p>
                <HeaderChevron opened={opened} />
            </div>
            <div className={`cardWrapper ${opened} ${hovered}`} onMouseOver={() => setHovered("true")} onMouseOut={() => setHovered("false")}>
                <div className='cardLeft'>
                    <ImagePicker images={props.images} />
                </div>
                <div className='cardRight'>
                    <p className="cardPText">{props.text}</p>
                    <LinkButtons linkArray={props.linkArray}/>
                </div>
            </div>
                <div className={`wrapperBottom ${opened}`}></div>
        </div>
    </div>
    )
}

export default ProjectCard;