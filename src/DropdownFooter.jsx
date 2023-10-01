import React from 'react';
import { Link } from 'react-scroll';

const MainPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="third-sec" smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Section 3
            </Link>
          </li>
        </ul>
      </nav>
    
    </div>
  );
};

export default MainPage