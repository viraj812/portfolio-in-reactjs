import { useEffect, useState } from 'react';
import profile from '../profile_pic.png'

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
      <div className='contentDiv'>
        <div className='contentBox'>
          <h2><span className='pronoun-span'>Hi There, <br />
            I'm </span>
            <span className='name-span'><TypewriterAnimation text="VIRAJ DESAI" delay={100} /></span>
          </h2>
  
          <p className='role'><span className='role-span'> Full-Stack Developer</span></p>
  
          <a href={require('../cv.pdf')} download="VIRAJ_CV"><input className='learnMore-btn' type='button' value='Download Resume' /></a>
        </div>
  
        <div className='img-container'>
          <img src={profile} alt='profile picture' />
        </div>
      </div>
    );
  }


  export default ContentBoxComponent;
  