import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src="assets/csm-logo.png" alt="Casa San Martín"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Lanas</a></li>
                <li><a href="#">Mercería</a></li>
                <li><a href="#">Librería</a></li>
                <li><a href="#">Juguetería</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar