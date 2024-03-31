import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ipe3j9y",
            "template_ghrthed",
            formRef.current,
            "i4vhFf6_U6JOrrJud"
        );
    }

    return (
        <div className="contactDiv" id="scroll4">
            <div className="contact1">
                <div className="contact-title">
                    <h3>Contact Info</h3>
                </div>
                <div className="social-container">
                    <p>Phone: <a href='tel:+918000739370'>+91 8000739370</a></p>
                    <p>Email: <a href='mailto:tovirajdesai@gmail.com'>tovirajdesai@gmail.com</a></p>
                    <p>LinkedIn: <a href='https://www.linkedin.com/in/viraj-desai-a80657254'>https://www.linkedin.com/in/viraj-desai-a80657254</a></p>
                </div>
            </div>
            <div className="contact2">
                <div className="contact-title">
                    <h3>Contact Me</h3>
                </div>
                <div className="form-container">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" name="from_name" placeholder="Your Name" /><br /><br />
                        <input type="email" name="from_email" placeholder="Your Email" /><br /><br />
                        <input type="text" name="message" placeholder="Enter Message" /><br /><br />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactPage;