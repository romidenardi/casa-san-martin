import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import GetFetch from '../../services/GetFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(() => {

        if (categoryId) {
            GetFetch
            .then(response => {        
                setItemList(response.filter(items => items.category === categoryId))
            })
            .catch (error => alert("Error:", error))
            .finally(()=> setLoading(false))
        }
        
        else {
            GetFetch
            .then(response => {        
                setItemList(response)
            })
            .catch (error => alert("Error:", error))
            .finally(()=> setLoading(false))
        }
    },[categoryId])

    return (
            <div className="item-list-container">
                {loading
                ? <h2 className="loading">Los productos se están cargando</h2>
                : <ItemList itemList={itemList}/>
                }
            </div>
    )
}

export default ItemListContainer