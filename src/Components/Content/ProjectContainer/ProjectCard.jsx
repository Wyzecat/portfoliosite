import './ProjectContainer.css';
import '../../../App.css';
import { useState } from 'react';
import LinkButtons from './LinkButton';
import HeaderChevron from './HeaderChevron';
import ModalImage from 'react-modal-image';
import ImagePicker from './ImagePicker';

function ProjectCard(props){
    let bodyclass = "cardBody ";
    bodyclass += props.position;
    const [opened,setOpened] = useState('closed')
    const [hovered,setHovered] = useState("notHovered");
    const imgDebug = [{small:'https://cfw.sarna.net/wiki/images/9/98/Commando_BTRSAGoAC.jpg', big:'https://cfw.sarna.net/wiki/images/9/98/Commando_BTRSAGoAC.jpg', name:"Commando", order:'1'},
                      {small:'https://cfw.sarna.net/wiki/images/2/27/Marauder_RGilClan_v06.png', big:'https://cfw.sarna.net/wiki/images/2/27/Marauder_RGilClan_v06.png', name:"Marauder", order:'2'}]
    return(
    <div className={bodyclass}>
        <div className={`projectCard ${hovered}`} onMouseOver={() => setHovered("true")} onMouseOut={() => setHovered("false")} >
            <div className='cardText' onClick={()=>{
                if(opened == "closed") setOpened('open');
                else setOpened("closed");
            }}>
                <h2 className='projectTitle'>{props.name}</h2>
                <p className='minorDesc'>{props.minor}</p>
                <HeaderChevron opened={imgDebug} />
            </div>
            <div className={`cardWrapper ${opened} ${hovered}`} onMouseOver={() => setHovered("true")} onMouseOut={() => setHovered("false")}>
                <div className='cardLeft'>
                    <ImagePicker images={imgDebug} />
                </div>
                <div className='cardRight'>
                    {props.text}
                    <LinkButtons links={props.links} />
                </div>
            </div>
                <div className={`wrapperBottom ${opened}`}></div>
        </div>
    </div>
    )
}

export default ProjectCard;