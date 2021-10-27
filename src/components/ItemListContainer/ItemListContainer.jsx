import {useEffect, useState} from 'react';
import GetFetchList from '../../services/GetFetchList';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        GetFetchList
        .then(response => {        
            setProduct(response)
        })
        .catch (error => console.log(error))
    },[])   

    return (
            <div className="list-container">
                <h1 className ="list-title">Sitio en construcción</h1>
                <p className ="list-copy">¡La esquina más querida del barrio muy pronto va a estar online!</p>
                <ItemList product={product}/>
            </div>
    )
}

export default ItemListContainer