import "./contact.css"
import mail_icon from './mail_icon.png';
import phone_icon from './phone_icon.png';
import github_icon from './github-logo.png'
import linkedin_icon from './linkedin-logo.png'

const ContactElement = (props) => {
    const defaultClick = () => { console.log('clicked'); }
    const handleClick = props.onClick != null ? props.onClick : defaultClick;

    return (
        <div className="contact-item" onClick={() => handleClick()}>
            <img className="contact-img" src={props.src} alt={props.text + " logo"} />
            <span className="link-span">{props.text}</span>
        </div>
    );
}

const ContactPage = () => {
    return (
        <div className="mainDiv">
            <div className="pageDiv">
                <div className="contentBox">
                    <div className="contacts-div">
                        <div className="name-div">
                            <h2>Viraj Desai</h2>
                        </div>

                        <div className="body-div">
                            <div className="contact-container">
                                <ContactElement text='Email' src={mail_icon} onClick={() => { window.open('mailto:tovirajdesai@gmail.com'); }}/>
                                <ContactElement text='Phone' src={phone_icon} onClick={() => { window.open('tel:+918000739370'); }}/>
                                <ContactElement text='GitHub' src={github_icon} onClick={ () => {window.open('https://github.com/viraj812/'); }} />
                                <ContactElement text='LinkedIN' src={linkedin_icon}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;