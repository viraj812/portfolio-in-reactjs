import './App.css';
import './pages/css/content.css';
import './pages/css/skill.css'
import SkillsPage from './pages/skill';
import NavComponent from './components/navigationBar';
import ContactPage from './pages/contact';
import ContentBoxComponent from './pages/content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const AboutPage = () => {
  return (
    <div className='aboutDiv'>
      <div className='about-title'>
        About Me
      </div>
    </div>
  )
}

const MainPage = () => {
  return (
    <div className='mainDiv'>
      <div className='pageDiv'>
        {/* <ContentBoxComponent /> */}
        <SkillsPage />
        <AboutPage />
      </div>
    </div>);
};

function App() {

  return (
    <BrowserRouter>
      <div className="nav-div">
        <NavComponent />
      </div>

      <Routes>
        <Route exact path='*' element={<MainPage />} />
        <Route path='/skills' element={<ContactPage />} />
        <Route path='/about' element={<ContactPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
