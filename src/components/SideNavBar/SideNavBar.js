import React from 'react';
import { BiPin, BiBarChart } from 'react-icons/bi';
import { HiOutlineCube, HiOutlineDocumentSearch, HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { IconContext} from 'react-icons';
import './SideNavBar.css';

function SideNavBar() {
  const sideBar = [
    {
      icon: <BiPin/>
    },
     {
      icon: <BiBarChart/>
    },
     {
      icon: <HiOutlineDocumentDuplicate/>
    },
     {
      icon: <HiOutlineCube/>
    },
     {
      icon: <HiOutlineDocumentSearch/>
    },
]
  return (
    <IconContext.Provider value={{ color: 'white'}}>
      <div className="sidebar-container">
        {sideBar.map((side, i) => 
          <li key={i}>
            {side.icon}
          </li>)}
      </div>
    </IconContext.Provider>
  )
}

export default SideNavBar
