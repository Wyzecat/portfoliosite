import './Modal.css';
import '../../../App.css';
import placeholder from '../../../Media/phgreen.png'

function Modal(props){
    return(
        <div className={props.title == props.status ? 'modal' : 'modalHidden'}>
            <div className='modalHeader'>
                <h2 className='modalTitle'>{props.title}</h2>
                <button className="closeModal" onClick={()=>{
                    props.updateStatus("N/A");
                }}>&#x2715;</button>
            </div>
            <div className='modalBody'>
                <div className='modalLeft'>
                    <img className='modalImg' src={props.path} />
                </div>
                <div className='modalRight'>
                    <div className='modalTxt'>
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;