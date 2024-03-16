import './App.css';
import './components/css/content.css';
import './components/css/skill.css';
import './components/css/about.css';
import SkillsPage from './components/skill';
import AboutPage from './components/about';
import NavComponent from './components/navigationBar';
import ContactPage from './components/contact';
import ContentBoxComponent from './components/content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';




const MainPage = (props) => {
  return (
    <div className='mainDiv'>
      <div className='pageDiv'>
        <ContentBoxComponent ref={props.home} />
        <SkillsPage ref={props.skill} />
        <AboutPage ref={props.about} />
      </div>
    </div>);
};

function App() {
  const home = useRef(null);
  const skill = useRef(null);
  const about = useRef(null);

  return (
      <div className="nav-div">
        <NavComponent home={home} skill={skill} about={about} />
        <MainPage home={home} skill={skill} about={about}/>
      </div>

  );
}

export default App;
