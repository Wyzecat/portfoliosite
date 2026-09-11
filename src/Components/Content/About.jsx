import './Content.css';
import '../../App.css';
function Home(){
    return (
        <section className='Home'>
            <h2 className='TitleTxt'>ABOUT ME</h2>
            <hr/>
            <div className='aboutContent'>
                <div className='aboutRight'>
                    <p>I am a software engineer based out of Hawaii with four years of professional experience as a full-stack developer in the insurance software space, and am currently focusing on front-end developement.  In my previous employment with Majesco (formerly Decision Research Corporation), I primarily used C# to work with a .NET backend and HTML, CSS, and Javascript for frontend coding.  In addition, I was assigned to an after-hours support rotation to debug issues related to payment processing, database entries, and production deployment issues.</p>
                    <p>Since leaving Majesco, I have dedicated time to brushing up on my front-end development skills so that I may pursue my primary area of interest.  To do so, I have taken up learning to use Figma, the proper techniques and processes for UI/UX development, and React.js so that I can design and code websites from beginning to end in conjunction with my previously existing skills with backend languages, which, in additon to C#, include Python and Java, with which I have years of experience, dating back to my high school years.</p>
                </div>
                <div className='aboutLeft'>
                    <img className='headshot' src="/ProjectImages/About/headshot.jpg" alt="Headshot"/>
                    <div className='profile'>
                        <ul>
                            <li><b>Education:</b> B.S. in Computer Science from the University of Portland</li>
                            <li><b>Professional Dev Experience:</b> Four years</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;