import profile_pic from "../about-pic.png"

const AboutPage = (props) => {
    return (
        <div className='aboutDiv' id="scroll3">
            <div className='about-title'>
                About Me
            </div>

            <div className='about-content'>
                <div className='about1'>
                    <div className='about1-img'>
                        <img src={profile_pic} />
                    </div>
                    <div className='about1-content'>
                        <p><span className='info'>Name: </span>Viraj Desai</p>
                        <p><span className='info'>Qualification: </span>BTech CSE</p>
                        <p><span className='info'>Experience: </span>Fresher</p>
                        <p><span className='info'>Location: </span>Ahmedabad, Gujarat, India</p>
                    </div>
                </div>

                <div className='about2'>
                    <div className='about2-content'>
                    I'm Viraj Desai, a Computer Science Engineering student at Pandit Deendayal Energy University with a passion for leveraging technology to solve real-world challenges. I have a solid foundation in algorithms, data structures, and software engineering, complemented by hands-on experience in full stack development, machine learning, and AI. Skilled in Python, and JavaScript, I also have practical expertise with cloud services (AWS), database systems (MySQL, MongoDB), and frameworks like ReactJS, NodeJS, and Django. My academic journey reflects both strong technical skills and a commitment to innovation.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
