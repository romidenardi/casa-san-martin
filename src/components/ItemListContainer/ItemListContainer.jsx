import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    return (
        <div className="container">
            <h1 className ="title">Sitio en construcción</h1>
            <p className ="copy">¡La esquina más querida del barrio muy pronto va a estar online!</p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer