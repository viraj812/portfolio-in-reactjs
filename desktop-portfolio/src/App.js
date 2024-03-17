import './App.css';
import './components/css/content.css';
import './components/css/skill.css';
import './components/css/about.css';
import './components/css/contact.css';
import SkillsPage from './components/skill';
import AboutPage from './components/about';
import NavComponent from './components/navigationBar';
import ContactPage from './components/contact';
import ContentBoxComponent from './components/content';

const MainPage = () => {
  return (
    <div className='mainDiv'>
      <div className='nav-div'>
        <NavComponent />
      </div>
      <div className='pageDiv'>
        <ContentBoxComponent />
        <SkillsPage />
        <AboutPage />
      <footer>
        <ContactPage />
      </footer>
      </div>
    </div>);
};

function App() {

  return (
    <MainPage />
  );
}

export default App;
