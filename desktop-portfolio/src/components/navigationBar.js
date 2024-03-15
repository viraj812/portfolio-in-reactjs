import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const NavComponent = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    }

    return (
          
        <nav>
                <div className='titleDiv'>Portfolio</div>

                <div className="navButtons">
                    <div className='nav-item' onClick={() => handleClick('/home')}>Home</div>

                    <div className='nav-item' onClick={() => handleClick('.skillDiv')}>Skills</div>

                    <div className='nav-item' onClick={() => handleClick('/about')}>About</div>

                    <div className='nav-item' onClick={() => handleClick('/contact')}>Contact</div>

                </div>
        </nav>
    );
}

export default NavComponent;