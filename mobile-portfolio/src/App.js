import profile from './profile_pic.png'
import './App.css';
import NavComponent from './components/navigationBar';
import ContactPage from './pages/contact';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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


const ContentBoxComponent = () => {

  return (
    <div className='contentBox'>
      <div className='contentDiv'>
        <h2><span className='pronoun-span'>Hi There, <br />
          I'm </span>
          <span className='name-span'><TypewriterAnimation text="VIRAJ DESAI" delay={100} /></span>
        </h2>

        <p className='role'><span className='role-span'> Full-Stack Developer</span></p>

        <input className='learnMore-btn' type='button' value='Learn More' />
      </div>

      <div className='img-container'>
        <img src={profile} alt='profile picture' />
      </div>
    </div>
  );
}

const MainPage = () => {
  return (<div className='mainDiv'>

    <div className='pageDiv'>
      <ContentBoxComponent />
    </div>
  </div>);
};

function App() {
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        <Route exact path='*' element={<MainPage/>} />
        <Route path='/skills' element={<ContactPage/>} />
        <Route path='/about' element={<ContactPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
