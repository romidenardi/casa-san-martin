import {useEffect, useState} from 'react';
import GetFetchDetail from '../../services/GetFetchDetail';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    useEffect(() => {
        GetFetchDetail
        .then(response => {        
            setDetail(response)
        })
        .catch (error => console.log(error))
    },[])   

    return (
            <div className="detail-container">
                <h2 className ="detail-title">Detalle del producto</h2>
                <ItemDetail detail={detail}/>
            </div>
    )
}

export default ItemDetailContainer