import './QuickLinks.css';
import '../../../App.css';

import linkedinLogo from '../../../Media/InBug-White.png'
import githubLogo from '../../../Media/GitHub_Invertocat_White.svg'

function QuickLinks() {
    return (
            <div className="quickLinks">
                <a className="quickLink" href="https://www.linkedin.com/in/andrew-tagawa-b96467185/" target="_blank">
                    <img src={linkedinLogo} className="linkIconQ" alt="linkedin"/>
                </a>
                <a className="quickLink" href="https://github.com/wyzecat" target="_blank">
                <img src={githubLogo} className="linkIconQ" alt="github"/>
                </a>
            </div>
    )
}

export default QuickLinks;