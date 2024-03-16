import logo1 from "./logo1.png";
import logo2 from "./logo2.png";

const ServicesElement = (props) => {
    return (

        <div className='services-element'>
            <div className='skill-img'>
                <img src={props.src} />
            </div>

            <div className='services-title'>
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
        <div className='skillDiv' id="scroll2">
            <div className='skill-title' >
                Skills
            </div>

            <div className='skill-services'>
                <div className='skill-title2'>
                    <h3>Services Provided</h3>
                </div>
                <div className="services-container">
                    <ServicesElement skill='Frontend Development' src={logo1} />
                    <ServicesElement skill='Data Science' />
                    <ServicesElement skill='Backend Development' src={logo2} />
                    <ServicesElement skill='Artificial Intelligence' />
                    <ServicesElement skill='Android App Development' />
                    <ServicesElement skill='Machine Learning' />
                </div>
            </div>

            <div className="skill-technologies">
                <div className="skill-title3">
                    <h3>Technologies</h3>
                </div>

                <div className="technologies-container">

                    <TechnologiesElement title="Web Technology" content={['ReactJS', 'NodeJS', 'ExpressJS', 'Flask', 'Django']} />
                    <TechnologiesElement title="Android Technology" content={['Android Studio', 'Kotlin', 'XML']} />
                    <TechnologiesElement title="AI/ML Technology" content={['Tensorflow', 'Pytorch', 'OpenCV', 'Scikit-learn']} />
                </div>
            </div>
        </div>
    )
}

export default SkillsPage;