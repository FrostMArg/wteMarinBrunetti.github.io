import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ItemStyle } from './ItemStyles.js';
import { ItemCount } from '../ItemCount/ItemCount.js';

const useStyles = makeStyles((theme) => ItemStyle(theme));
export const Item = props => {
    const { id, title, description, price, pictureUrl, alt, stock, descShort } = props;
    const classes = useStyles();

    return (<>
        <Card className={classes.root} key={id}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={"$" + price + " Stock: " + stock}
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
            <ItemCount cantidad={stock} init={1} />
        </Card>
    </>
    );

}
