import './ProjectContainer.css';
import '../../../App.css';
import { useState } from 'react';
import ModalImage from 'react-modal-image';

function Images(props){
    const pics = [];
    for(let i = 0; i < props.images.length; i++){
        const pathSmall = props.images[i].small;
        const srcSmall = `/ProjectImages/${pathSmall}`;
        const pathBig = props.images[i].big;
        const srcBig = `/ProjectImages/${pathBig}`;
        pics.push(
            <ModalImage className={`cardImg${props.currentImage == props.images[i].order ? '' : ' hidden'}`} small={srcSmall} large={srcBig} alt={props.images[i].name} />
        )
    }
    return pics;
}

function ImagePicker(props){
    const [image,setImage] = useState(1);
    const maxCount = props.images.length;
    return (
        <><Images images={props.images} currentImage={image}/>
            <div className='imgSelect'>
                <div className='selectPrev' onClick={()=>{
                    image == 1 ? setImage(maxCount) : setImage(image - 1)
                }}>◀</div>
                <div className='currNum'>{image}/{maxCount}</div>
                <div className='selectNext' onClick={()=>{
                    image == maxCount ? setImage(1) : setImage(image + 1)
                }}>▶</div>
            </div>
        </>
)
}

export default ImagePicker;