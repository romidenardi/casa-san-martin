import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import GetFetchList from '../../services/GetFetchList';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])

    const {categorie} = useParams()

    useEffect(() => {

        if (categorie) {
            GetFetchList
            .then(response => {        
                setProduct(response.filter(prod => prod.categorie === categorie))
            })
            .catch (error => console.log(error))
        }
        
        else {
            GetFetchList
            .then(response => {        
                setProduct(response)
            })
            .catch (error => console.log(error))
        }
    },[categorie])

    return (
            <div className="list-container">
                <h1 className ="list-title">Sitio en construcción</h1>
                <p className ="list-copy">¡La esquina más querida del barrio muy pronto va a estar online!</p>
                <ItemList product={product}/>
            </div>
    )
}

export default ItemListContainer