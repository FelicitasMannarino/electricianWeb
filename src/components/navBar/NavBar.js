
import './NavBar.css';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <header>
        <nav className='navbar navbar-expand-lg'>
         <div className='container-fluid'>
           <Link className='navbar-brand navbar-logo' >EG</Link>
           <div className='navbar-options' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                    <Link to='servicios-section'  duration={300} className='nav-link active' aria-current='page'>Servicios</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='us-section' duration={300} className='nav-link active'>Nosotros</Link>
                    </li>
                    <li className='nav-item'>
                    <a href='https://wa.me/1163753243' className='nav-link active'>Contacto</a>
                    </li>
                </ul>
           </div>
         </div>
        </nav>
    </header>
  );
}

export default NavBar;