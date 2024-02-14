import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavComponent = () => {

    const [display, setDisplay] = useState("none");


    const handleClick = (url) => {
        navigate(url);
    }
    const navigate = useNavigate();

    const toggleNavigationMenu = () => {

        if (display === 'initial') {
            setDisplay("none");
        }
        else {
            setDisplay("initial");
        }
    }

    return (
        <nav>
            {/* <div className="nav-div"> */}
                <div className='titleDiv'>Portfolio</div>

                <div className='navButtons' onClick={() => toggleNavigationMenu()}>
                </div>

                <div className="navigation-menu" style={{ "display": display }}>
                    <div className='nav-item' onClick={() => handleClick('/')}>Home</div>

                    <div className='nav-item' onClick={() => handleClick('/skills')}>Skills</div>

                    <div className='nav-item' onClick={() => handleClick('/about')}>About</div>

                    <div className='nav-item' onClick={() => handleClick('/contact')}>Contact</div>

                </div>
            {/* </div> */}
        </nav>
    );
}

export default NavComponent;