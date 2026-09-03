import './ProjectContainer.css';
import '../../../App.css';

function HeaderChevron(props){
    if(props.opened === "open"){
        return(
            <p className='headerChevron'>▼</p>
        )
    }
    else{
        return(
            <p className='headerChevron'>▲</p>
        )
    }
}

export default HeaderChevron;