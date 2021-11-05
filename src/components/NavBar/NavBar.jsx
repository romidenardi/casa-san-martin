import {Link} from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link className="logo" to="/"><img className="navbar-logo" src="../assets/csm-logo.png" alt="Casa San Martín"/></Link>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categoria/lanas">Lanas</Link></li>
                <li><Link to="/categoria/merceria">Mercería</Link></li>
                <li><Link to="/categoria/libreria">Librería</Link></li>
                <li><Link to="/categoria/jugueteria">Juguetería</Link></li>
            </ul>
            <CartWidget className="navbar-cart"/>
        </nav>
    )
}

export default NavBar