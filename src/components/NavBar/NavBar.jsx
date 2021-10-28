import {Link} from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="assets/csm-logo.png" alt="Casa San Martín"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="/">Nosotros</a></li>
                <li><Link to="/categoria/lanas">Lanas</Link></li>
                <li><Link to="/categoria/merceria">Mercería</Link></li>
                <li><Link to="/categoria/libreria">Librería</Link></li>
                <li><Link to="/categoria/jugueteria">Juguetería</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar