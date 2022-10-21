import React from 'react';
import Heading from './Heading';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

    const [click, setClick] = React.useState(false)
  return (
    <div>
      <Heading/>
      <header>
        <nav className='flex5B'>
            <ul className={click? "mobile-nav" : 'flex5B'} onClick={()=> setClick(false)}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">All Courses</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> 
            <div className="start">
                <div className="button">GET CERTIFICATE</div>
            </div>
            {/* toggle mobil menu */}
            <button className='toggle' onClick={()=> setClick(!click)}>
                {click? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
