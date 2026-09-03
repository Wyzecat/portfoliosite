import './ProjectContainer.css';
import '../../../App.css';

function LinkButtons(props){
    const buttons = [];
    if(props.linkArray){
        for(let i=0; i<props.linkArray.length; i++){
            if(props.linkArray[i].url.length>0){
                buttons.push(
                    <>
                        <a href={props.linkArray[i].url} className='download' target="_blank">
                            {props.linkArray[i].text}
                            <p className="chevron">❯</p>
                        </a>
                    </>
                );
            }
        }
    }
    return buttons;
}

export default LinkButtons;