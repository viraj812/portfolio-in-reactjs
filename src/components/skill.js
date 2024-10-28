import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo6 from "./logo6.png";

const ServicesElement = (props) => {
    return (

        <div className='services-element'>
            <div className='skill-img'>
                <img src={props.src} />
            </div>

            <div className='services-title'>
                {props.skill}
            </div>

        </div>

    )
}

const TechnologiesElement = (props) => {
    return (
        <div className="technologies-element">
            <div className="technologies-title">
                {props.title}
            </div>

            <div className="technologies-content">
                <ul>
                    {
                        props.content.map(element => {
                            return (<li>{element}</li>);
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const SkillsPage = () => {

    return (
        <div className='skillDiv' id="scroll2">
            <div className='skill-title' >
                Skills
            </div>

            <div className='skill-services'>
                <div className='skill-title2'>
                    <h3>Services Provided</h3>
                </div>
                <div className="services-para">
                I provide high-quality, reliable software solutions tailored to meet unique client needs, ensuring efficiency, performance, and seamless user experience. My commitment to excellence results in robust, scalable, and well-designed software products across various technologies.
                </div>
                <div className="services-container">
                
                    <ServicesElement skill='Frontend Development' src={logo1} />
                    <ServicesElement skill='Data Science' src={logo2} />
                    <ServicesElement skill='Backend Development' src={logo3} />
                    <ServicesElement skill='Artificial Intelligence & Machine Learning' src={logo4} />
                </div>
            </div>

            <div className="skill-technologies">
                <div className="skill-title3">
                    <h3>Technologies</h3>
                </div>

                <div className="technologies-container">
                    <div className="technologies-para">
                    I have a diverse skill set across AI, machine learning, and web development, with expertise in Python, JavaScript. Skilled in frameworks like ReactJS, NodeJS, and Django for full stack projects, I also have experience with databases (MySQL, MongoDB) and cloud services (AWS), enabling me to build scalable, efficient solutions.
                    </div>
                    <TechnologiesElement title="Frontend Technology" content={['HTML', , 'CSS', 'ReactJS']} />
                    <TechnologiesElement title="Backend Technology" content={['JavaScript', 'NodeJS', 'ExpressJS', 'Flask', 'Django', 'MYSQL', 'MongoDB', 'AWS']} />
                    <TechnologiesElement title="AI/ML Technology" content={['Tensorflow', 'Pytorch', 'OpenCV', 'Scikit-learn']} />
                </div>
            </div>
        </div>
    )
}

export default SkillsPage;