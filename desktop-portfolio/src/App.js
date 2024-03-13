import './App.css';
import './components/content.css';
import NavComponent from './components/navigationBar';
import ContactPage from './pages/contact';
import ContentBoxComponent from './components/content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const SkillElement = (props) => {
  return (

    <div className='skill-element'>
      {props.skill}
    </div>

  )
}

const SkillsPage = () => {
  return (
    <div className='skillDiv'>
      <div className='skill-title'>
        <h4>Skills</h4>
      </div>
      <div className='skills'>
        <SkillElement skill='Frontend Development' />
        <SkillElement skill='Backend Development' />
        <SkillElement skill='Android App Development' />
        <SkillElement skill='Machine Learning' />
        <SkillElement skill='Deep Learning' />
        <SkillElement skill='Artificial Intelligence' />
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
