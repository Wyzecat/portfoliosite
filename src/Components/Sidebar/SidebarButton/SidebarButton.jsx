import './SidebarButton.css';
import '../../../App.css';
import { Routes, Route, Link } from "react-router-dom";
function SidebarButton(props){
    return (
        <div className='SidebarButton' onClick={()=>{
                props.updateStatus(props.name);
            }} className={((props.name.toLowerCase().includes(props.status) && props.status != "") || props.status == props.name || (props.status == '' && props.name =='Projects')) ? 'SidebarButton selected' : 'SidebarButton' }>
            <Link to={props.link}>
                <h2 className='buttonText'>{props.name}</h2>
            </Link>
        </div>
    );
}

export default SidebarButton;