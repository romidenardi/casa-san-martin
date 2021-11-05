import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import GetFetch from '../../services/GetFetch';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [itemList, setItemList] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {

        if (categoryId) {
            GetFetch
            .then(response => {        
                setItemList(response.filter(items => items.category === categoryId))
            })
            .catch (error => alert("Error:", error))
        }
        
        else {
            GetFetch
            .then(response => {        
                setItemList(response)
            })
            .catch (error => alert("Error:", error))
        }
    },[categoryId])

    return (
            <div className="item-list-container">
                <ItemList itemList={itemList}/>
            </div>
    )
}

export default ItemListContainer