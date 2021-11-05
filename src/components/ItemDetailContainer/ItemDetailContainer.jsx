import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import GetFetch from '../../services/GetFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([]);

    const {itemId} = useParams();

    useEffect(() => {
        GetFetch
        .then(response => {        
            setItemDetail(response.find(item => item.id === itemId))
        })
        .catch (error => alert("Error:", error))
    },[itemId])

    return (
            <div>
                <ItemDetail itemDetail={itemDetail}/>
            </div>
    )
}

export default ItemDetailContainer