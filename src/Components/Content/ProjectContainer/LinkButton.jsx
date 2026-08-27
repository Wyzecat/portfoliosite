import './ProjectContainer.css';
import '../../../App.css';

function LinkButtons(props){
    const buttons = [];
    if(props.links){
        for(let i=0; i<props.links.length; i++){
            if(props.links[i].url.length>0){
                buttons.push(
                    <>
                        <a href={props.links[i].url} className='download' target="_blank">{props.links[i].text}<p className="chevron">❯</p></a>
                    </>
                );
            }
        }
    }
    return buttons;
}

export default LinkButtons;