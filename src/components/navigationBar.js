const NavComponent = (props) => {


    const handleClick = (url) => {
        document.getElementById(url).scrollIntoView({behavior: "smooth"});
    }

    return (

        <nav>
            <div className='titleDiv'>Portfolio</div>

            <div className="navButtons">
                <div className='nav-item'>Home</div>

                <div className='nav-item' onClick={() => handleClick('scroll2')}>Skills</div>

                <div className='nav-item' onClick={() => handleClick('projects')}>Projects</div>

                <div className='nav-item' onClick={() => handleClick('scroll3')}>About</div>

                <div className='nav-item' onClick={() => handleClick('scroll4')}>Contact</div>

            </div>
        </nav>
    );
}

export default NavComponent;