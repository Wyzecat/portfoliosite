import './Footer.css';
import '../../App.css';
import QuickLinks from '../Sidebar/QuickLinks/QuickLinks';

function Footer(){
    return (
        <footer>
            {/*<p className='footerTxt'>Theme:</p>
                <select className='themePicker'>
                <option>Dark</option>
                <option>Light</option>
            </select>*/}
            <p className="verNum">v.2026.8</p>
            <QuickLinks location="footer" />
        </footer>
    );
}

export default Footer;