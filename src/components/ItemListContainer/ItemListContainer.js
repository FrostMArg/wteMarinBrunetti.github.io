import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { makeStyles, Typography } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

// Generate = Genera la cantidad de elementros a mostrar en el componente
function generate(element) {
    return [0, 1, 2, 3, 4].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export const ItemListContainer = props => {
    const { titulo, subtitulo, precio } = props;
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    return (<>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={classes.container}>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {/* Aca tiene que ir la miniatura del producto */}
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={titulo + " " + subtitulo}
                                        secondary={precio}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="sumar">
                                            <AddCircleOutlineIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="restar">
                                            <RemoveCircleOutlineIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="borrar">
                                            <DeleteIcon />
                                        </IconButton>

                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    </>
    );
}



