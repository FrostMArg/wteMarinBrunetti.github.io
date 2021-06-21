import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ItemStyle } from './ItemStyles.js';

const useStyles = makeStyles((theme) => ItemStyle(theme));
export const Item = (dataProd, i) => {
    const styles = useStyles();
    const { id, title, description, price, pictureUrl, alt, stock, descShort } = dataProd.productos;
    return (<>
        <Card className={styles.root} key={id}>
            <CardHeader
                title={title}
                subheader={"$ " + price}
            />
            <CardMedia
                component='img'
                image={pictureUrl}
                width="150"
                title={alt}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {descShort}
                </Typography>
            </CardContent>
        </Card>
    </>
    );
}
