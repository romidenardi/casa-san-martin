import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../services/GetFirestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import PageNotFound from '../PageNotFound/PageNotFound';

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNotFound, setPageNotFound] =useState(false);

    const {itemId} = useParams();

    useEffect(() => {

        const dataBase = getFirestore()

        dataBase.collection("items").doc(itemId).get()
        .then((item) => {
            !item.exists
            ? setPageNotFound(true)
            : setItemDetail({id:item.id, ...item.data()})
        }) 
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))

    },[itemId])

    return (
        <>
            {pageNotFound
                ? <PageNotFound/>
                : loading
                    ? <h2 className="loading">El detalle del producto se está cargando</h2>
                    : <ItemDetail itemDetail={itemDetail}/>
            }
        </>
    )
}

export default ItemDetailContainer