import React from 'react';
import Card from '@material-ui/core/Card';
import { ItemStyle } from './ItemStyles.js';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ItemStyle(theme));
export const Item = (dataProd, i) => {
    const styles = useStyles();
    const { id, title, price, pictureUrl, alt, descShort } = dataProd.productos;
    return (<Card className={styles.root} key={id}>
        <CardHeader title={title} subheader={"$ " + price} />
        <CardMedia component='img' image={pictureUrl} width="150" title={alt} />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" > {descShort} </Typography>
        </CardContent>
    </Card>
    );
}
