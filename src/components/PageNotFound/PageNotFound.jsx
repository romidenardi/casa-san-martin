import {Link} from 'react-router-dom'
import './PageNotFound.css';

const PageNotFound = () => {
    return (
            <div>
                <p className="empty-page">¡Ups! No encontramos lo que estás buscando</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
    )
}

export default PageNotFound

