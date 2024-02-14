import "./contact.css"
import mail_icon from './mail_icon.png'

const ContactElement = (props) => {
    return (
        <div className="contact-item">
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
                                <ContactElement text='Email' src={mail_icon}/>
                                <ContactElement text='Phone' />
                                <ContactElement text='GitHub'/>
                                <ContactElement text='LinkedIN'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;