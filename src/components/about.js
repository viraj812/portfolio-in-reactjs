import profile_pic from "../about-pic.jpg"

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
                        <p><span className='info'>Name :-</span><br />Viraj Desai</p>
                        <span className='info'>Qualification :-</span>BTech Computer Science Engineering
                        <p><span className='info'>Experience :-</span><br />Fresher</p>
                        <span className='info'>Interest :-</span>Artificial Intelligence, Data Science, Full Stack Development
                        <p><span className='info'>Location :-</span><br /> Ahmedabad, Gujarat, India</p>
                    </div>
                </div>

                <div className='about2'>
                    <div className='about2-content'>
                        I'm Viraj Desai, an enthusiastic Computer Science Engineering student with a strong inclination towards utilizing technology for addressing real-world challenges. Presently enrolled in my Bachelor's program at Pandit Deendayal Energy University, Gandhinagar, I am captivated by the constantly evolving realm of computer science.
                        <br /><br />
                        Educational Background :-
                        <br />
                        My academic journey has endowed me with a robust grasp of fundamental computer science principles, encompassing algorithms, data structures, programming languages, and software engineering tenets. I have consistently pursued academic excellence, maintaining a commendable GPA while actively participating in extracurricular pursuits that complement my studies.

                        <br /><br />
                        Technical Proficiency :-
                        <br />
                        <ul>
                            <li>Proficiency in programming languages such as Python, JavaScript, Kotlin, Java, C and C++.</li>
                            <br />
                            <li>Hands-on experience in crafting full stack web applications using HTML, CSS, and frameworks such as ReactJS, NodeJS, Flask, Django.<br /></li>
                            <br />
                            <li>Strong fundamentals and practical knowledge, skills in machine learning and artificial intelligence, demonstrated through practical implementation of algorithms and models.</li>
                            <br />
                            <li>Proficient in managing database systems including MySQL, MongoDB, and PostgreSQL.</li>
                            <br />
                            <li>Practical expertise in cloud services such as AWS and application deployment and management.</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
