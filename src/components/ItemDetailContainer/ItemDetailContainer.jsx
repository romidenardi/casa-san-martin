import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import GetFetch from '../../services/GetFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams();

    useEffect(() => {
        GetFetch
        .then(response => {        
            setItemDetail(response.find(item => item.id === itemId))
        })
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))
    },[itemId])

    return (
            <div>
                {loading
                ? <h2 className="loading">El detalle del producto se está cargando</h2>
                : <ItemDetail itemDetail={itemDetail}/>
                }
            </div>
    )
}

export default ItemDetailContainer