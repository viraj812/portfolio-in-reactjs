
const ContactPage = () => {
    return (
        <div className="contactDiv" id="scroll4">
            <div className="contact1">
                <div className="contact-title">
                    <h3>Contact Info</h3>
                </div>
                <div className="social-container">

                </div>
            </div>
            <div className="contact2">
                <div className="contact-title">
                    <h3>Contact Me</h3>
                </div>
                <div className="form-container">
                    <form>
                        <input type="text" placeholder="Your Name" /><br /><br />
                        <input type="email" placeholder="Your Email" /><br /><br />
                        <input type="text" placeholder="Enter Message" /><br /><br />
                        <input type="button" value="Send" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactPage;