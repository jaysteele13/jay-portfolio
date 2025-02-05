import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, linkedin, logo, github, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMedScreen, setIsisMedScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Check if screen width is less than 640px
      setIsisMedScreen(window.innerWidth < 850);
    };

    // Set the initial screen size status
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex '}  {${isSmallScreen ? 'flex-row gap-3' : 'flex-row gap-6'} justify-between items-center`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white ${isSmallScreen ? 'text-[14px]' : 'text-[20px]'} font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a className="text-white"  href={`#${link.id}` }>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-$
          {isSecondary ? 'white' : 'white'} hover:text-white ${isSmallScreen ? 'text-[14px]' : 'text-[20px]'} font-medium cursor-pointer`}
      >
        <a href="https://jaysteele13.github.io/jay-portfolio/Jay_Steele_CV.pdf" rel="noopener noreferrer" target='_blank'>Resume</a>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
           {/* Button for GitHub */}
          <button
            className="w-9 h-9 flex items-center justify-center"
            onClick={() => window.open('https://www.github.com/jaysteele13', '_blank')}
          >
            <img src={github} alt="GitHub" className="w-9 h-9 object-contain" />
          </button>

   
          <button
            className="w-9 h-9 flex items-center justify-center"
            onClick={() => window.open('https://www.linkedin.com/in/jaysteele1', '_blank')}
          >
            <img src={linkedin} alt="LinkedIn" className="w-9 h-9  object-contain" />
          </button>
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className={`text-white text-[20px] font-bold cursor-pointer flex`}>
              JAY&nbsp;
              <span className={` ${isMedScreen ? 'hidden': ''}sm:block hidden`}>STEELE</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? 'flex' : 'hidden'
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
