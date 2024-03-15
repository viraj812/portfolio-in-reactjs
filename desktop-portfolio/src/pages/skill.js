import logo1 from "./logo1.png";
import logo2 from "./logo2.png";

const ServicesElement = (props) => {
    return (

        <div className='services-element'>
            <div className='skill-img'>
                <img src={props.src} />
            </div>

            <div className='skill-title'>
                {props.skill}
            </div>

            <div className='skill-content'>
                {props.content}
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
        <div className='skillDiv'>
            <div className='skill-title'>
                <h4>Skills</h4>
            </div>

            <div className='skill-services'>
                <div className='skill-title2'>
                    <h3>Services Provided</h3>
                </div>
                <div className="services-container">
                    <ServicesElement skill='Frontend Development' src={logo1} />
                    <ServicesElement skill='Backend Development' src={logo2} />
                    <ServicesElement skill='Android App Development' />
                    <ServicesElement skill='Machine Learning' />
                    <ServicesElement skill='Deep Learning' />
                    <ServicesElement skill='Artificial Intelligence' />
                </div>
            </div>

            <div className="skill-technologies">
                <div className="skill-title3">
                    <h3>Technologies</h3>
                </div>

                <div className="technologies-container">
                    {/* <ul style={{ color: "white" }}>
                        <li>
                            Web Technologies
                            <ul>
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>Flask</li>
                                <li>Django</li>
                            </ul>
                        </li>

                        <br />

                        <li>
                            Android Technologies
                            <ul>
                                <li>Android Studio</li>
                            </ul>
                        </li>

                        <br />

                        <li>
                            Artificial Intelligence and Machine Learning Technologies
                            <ul>
                                <li>Tensorflow</li>
                                <li>Pytorch</li>
                                <li>OpenCV</li>
                                <li>Scikit-learn</li>
                            </ul>
                        </li>
                    </ul> */}

                    <TechnologiesElement title="Web Technology" content={['ReactJS', 'NodeJS', 'ExpressJS', 'Flask', 'Django']} />
                    <TechnologiesElement title="Android Technology" content={['Android Studio', 'Kotlin', 'XML']} />
                    <TechnologiesElement title="Artificial Intelligence and Machine Learning Technology" content={['Tensorflow', 'Pytorch', 'OpenCV', 'Scikit-learn']} />
                </div>
            </div>
        </div>
    )
}

export default SkillsPage;