import React from 'react';
import './navlist.css'
import { Link } from 'react-router-dom';
function Navlist({name,to,onClick}) {
  return (
    <div className="navlist" onClick={onClick}>
          <li>
              {name}
          </li>
    </div>
  );
}

export default Navlist;
