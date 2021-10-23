import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ()=> {
    return (
        <div className="container">
            <h1 className ="title">Sitio en construcción</h1>
            <p className ="copy">¡La esquina más querida del barrio muy pronto va a estar online!</p>
            <ItemCount initial={1} stock={8}/>
        </div>
    )
}

export default ItemListContainer