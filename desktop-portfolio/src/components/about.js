import profile_pic from "../profile_pic.png"

const AboutPage = () => {
    return (
        <div className='aboutDiv'>
            <div className='about-title'>
                About Me
            </div>

            <div className='about-content'>
                <div className='about1'>
                    <div className='about1-img'>
                        <img src={profile_pic} />
                    </div>
                    <div className='about1-content'>
                        <p><span className='info'>Name:</span> Viraj Desai</p>
                        <p><span className='info'>Qualification:</span> BTech Computer Science</p>
                        <p><span className='info'>Experience:</span> Fresher</p>
                        <p><span className='info'>Interest:</span> Artificial Intelligence, Data Science, Full Stack Development</p>
                        <p><span className='info'>Location:</span> Ahmedabad, Gujarat</p>
                    </div>
                </div>

                <div className='about2'>
                    <div className='about2-content'>
                        I'm Viraj Desai, an enthusiastic Computer Science Engineering student with a strong inclination towards utilizing technology for addressing real-world challenges. Presently enrolled in my Bachelor's program at Pandit Deendayal Energy University, Gandhinagar, I am captivated by the constantly evolving realm of computer science.
                        <br />
                        Educational Background:
                        My academic journey has endowed me with a robust grasp of fundamental computer science principles, encompassing algorithms, data structures, programming languages, and software engineering tenets. I have consistently pursued academic excellence, maintaining a commendable GPA while actively participating in extracurricular pursuits that complement my studies.

                        <br /><br />
                        Technical Proficiency:
                        <br />
                        <ul>
                            <li>Proficiency in programming languages such as Java, Python, C++, and JavaScript.</li>
                            <br />
                            <li>Hands-on experience in crafting web applications using HTML, CSS, and diverse frontend and backend frameworks.<br /></li>
                            <br />
                            <li>Proficient in managing database systems including MySQL, MongoDB, and PostgreSQL.</li>
                            <br />
                            <li>Acquaintance with cloud computing platforms like AWS and Azure, coupled with practical expertise in application deployment and management.</li>
                            <br />
                            <li>Familiarity with machine learning and artificial intelligence principles, demonstrated through practical implementation of algorithms and models.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
