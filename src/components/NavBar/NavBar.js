import React from 'react';
import './NavBar.css';
import { FiPrinter, FiExternalLink } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaStream } from 'react-icons/fa';

function NavBar() {

  const navIcon = [
    {
      icon: <FaStream/>
    },
    {
      icon: <BsDownload/>
    },
    {
      icon: <FiPrinter/>
    },
    {
      icon: <AiOutlineQuestionCircle/>
    },
    {
      icon: <FiExternalLink/>
    }
  ]

  return (
    <div className="navbar-container">
      <div className="navbar-leftMenu">
        Diagnostic Tool
      </div>
      <div className="navbar-rightMenu">        
        {navIcon.map((nav,i) => 
          <li key={i}>
            {nav.icon}
          </li>
        )}
      </div>
    </div>
  )
}

export default NavBar
