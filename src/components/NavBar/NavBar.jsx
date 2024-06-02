import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>Cargo</div>
      <ul className='nav-menu'>
        <li>
          HOME <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#home1">Submenu 1</a>
            <a href="#home2">Submenu 2</a>
            <a href="#home3">Submenu 3</a>
          </div>
        </li>
        <li>
          PAGES <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#pages1">Submenu 1</a>
            <a href="#pages2">Submenu 2</a>
            <a href="#pages3">Submenu 3</a>
          </div>
        </li>
        <li>TRACKING</li>
        <li>
          SERVICES <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#services1">Submenu 1</a>
            <a href="#services2">Submenu 2</a>
            <a href="#services3">Submenu 3</a>
          </div>
        </li>
        <li>
          BLOG <span className='dropdown-arrow'>▼</span>
          <div className='dropdown-content'>
            <a href="#blog1">Submenu 1</a>
            <a href="#blog2">Submenu 2</a>
            <a href="#blog3">Submenu 3</a>
          </div>
        </li>
        <li className='nav-contact get-quote'>GET A QUOTE</li>
        <li className='nav-contact sign-in'>SIGN IN</li>
      </ul>
    </div>
  );
};

export default NavBar;