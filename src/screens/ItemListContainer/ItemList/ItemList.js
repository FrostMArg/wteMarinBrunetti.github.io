import React from 'react';
import { Item } from '../Item/Item.js';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { itemListStyles } from './ItemListStyles.js';
import CircularIndeterminate from '../../../Components/Loader/Loader.js';
const useStyle = makeStyles((theme) => itemListStyles(theme));
export const ItemList = ({ status, productos }) => {
    const styles = useStyle();
    console.log(productos)
    return (<>
        {status === 'Pending' ? (<CircularIndeterminate />) : (productos?.map((item) => (
            <Link className={styles.link} to={`/item/${item.id}`} key={item.id}><Item productos={item} /></Link>
        )))}
    </>);
};