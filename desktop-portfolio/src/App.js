import profile from './profile_pic.png'
import './App.css';
import { useEffect, useState } from 'react';


const TypewriterAnimation = (props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (currentIndex < props.text.length) {
      let txtArray = Array.from(props.text);
      setTimeout(() => {
        setCurrentText(currentText + txtArray[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, props.delay)
    }
  }, [currentText]);


  return <span>{currentText}</span>;
};

const NavComponent = () => {
  return (<nav>
    <div className='titleDiv'>Portfolio</div>

    <div className='navButtons'>
      <div className='nav-item'>Home</div>
      <div className='nav-item'>Skills</div>
      <div className='nav-item'>About</div>
      <div className='nav-item'>Contact</div>
    </div>
  </nav>);
}


const ContentBoxComponent = () => {

  return (
    <div className='contentBox'>
      <div className='contentDiv'>
        <h2><span className='pronoun-span'>Hi There, <br />
          I'm </span>
          <span className='name-span'><TypewriterAnimation text="VIRAJ DESAI" delay={100} /></span>
        </h2>

        <p className='role'><span className='role-span'> Full-Stack Developer</span></p>

        <input className='learnMore-btn' type='button' value='Learn More'/>
      </div>

      <div className='img-container'>
        <img src={profile} alt='profile picture' />
      </div>
    </div>
  );
}

const mainPage = (
  <div className='mainDiv'>

    <NavComponent />

    <div className='pageDiv'>
      <ContentBoxComponent />
    </div>
  </div>
);

function App() {
  return mainPage;
}

export default App;
