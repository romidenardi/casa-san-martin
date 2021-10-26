import {useEffect, useState} from 'react';
import GetFetch from '../../services/GetFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        GetFetch
        .then(response => {        
            setProduct(response)
        })
        .catch (error => console.log(error))
    },[])   

    return (
            <div className="container">
                <h1 className ="title">Sitio en construcción</h1>
                <p className ="copy">¡La esquina más querida del barrio muy pronto va a estar online!</p>
                <ItemList product={product}/>
            </div>
    )
}

export default ItemListContainer