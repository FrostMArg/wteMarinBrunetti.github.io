import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        loaderText: {
        },
    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress
                size={50}
                left={-20}
                top={20}
                status={'loading'}
                style={{
                    marginLeft: '50%',
                    marginTop: '20%'
                }} />
        </div>
    );
}