import {
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

import "./Navbar.css";
import Logo from "../assets/images/logo.svg";

const Navbar = ({ sticky }) => {
  return (
   <>    
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
          {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
          <h1> Stick'Me</h1>
        </div>
        <Bars />  
        <NavMenu>
	  <NavLink to='/' activeStyle>
            Home
          </NavLink>	  
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>        
    </nav>    
   </>
  );
}
export default Navbar