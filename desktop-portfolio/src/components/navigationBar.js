import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const NavComponent = (props) => {
    const ref = useRef(null);

    const handleClick = (url) => {
        window.scrollTo(url);
    }

    return (

        <nav>
            <div className='titleDiv'>Portfolio</div>

            <div className="navButtons">
                <div className='nav-item'>Home</div>

                <div className='nav-item' onClick={() => props.ref.current?.scrollToView()}>Skills</div>

                <div className='nav-item' onClick={() => handleClick('/about')}>About</div>

                <div className='nav-item' onClick={() => handleClick('/contact')}>Contact</div>

            </div>
        </nav>
    );
}

export default NavComponent;