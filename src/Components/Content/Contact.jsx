import './Content.css';
import '../../App.css';
function Contact(){
    return (
        <section className='Contact'>
            <h2 className='TitleTxt'>CONTACT ME</h2>
            <hr/>
            <p>To contact me, simply fill out the form below (redirects to an external confirmation page upon submission).</p>
            <form action="https://api.web3forms.com/submit" method="POST">
                <div className="contactForm">
                    <input type="hidden" name="access_key" value="b00d2d46-cb22-4152-9916-8ecfc271d690"/>
                    <label className="contactLabel l1">Name</label>
                    <input type="text" name="name" className="contactField l1" required/>
                    <label className="contactLabel l2">Email Address</label>
                    <input type="email" name="email" className="contactField l2" required/>
                    <label className="contactLabel l3">Message</label>
                    <textarea name="message" spellCheck="false" className="contactField l3"required></textarea>
                </div>
                <div className='submitContainer'>
                    <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;