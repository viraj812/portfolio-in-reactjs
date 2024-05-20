import weather_logo from "./weather-logo.png"
import os_logo from "./os-logo.png"
import weather_bg from "./weather-app.png"
import os_bg from "./os-app.png"

const ProjectElement = (props) => {
    return (
        <div className="project-element" style={{
            backgroundImage: `url(${props.project_img})`}}>
            <div className="project-layer" onClick={() => { window.open(props.url) }}></div>

            <div className="project-img">
                <img src={props.src} alt={props.title + " logo"} />
            </div>

            <div className="project-title">
                <h3>{props.title}</h3>
            </div>
        </div >
    )
}

const ProjectComponent = () => {
    return (
        <div className="project-component" id="projects">
            <div className="project-heading">
                <h2> My Projects</h2>
            </div>
            <div className="project-content">
                <ProjectElement title="Weather App" src={weather_logo} project_img={weather_bg} url="https://react-weather-app-taupe-six.vercel.app/" />
                <ProjectElement title="OS Website" src={os_logo} project_img={os_bg} url="https://os-website.onrender.com/" />
            </div>
        </div>
    )
}

export default ProjectComponent;