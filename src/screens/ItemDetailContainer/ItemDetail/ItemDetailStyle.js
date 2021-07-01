export const ItemDetailStyle = theme => {
    return ({
        root: {
            display: 'flex',
            border: 'none'
        },
        cardRoot: {
            display: 'flex',
            border: 'none',
            padding: '2em',
            '@media (max-width: 768px) ': {
                flexWrap: 'nowrap',
                flexDirection: 'column',
                alignItems: 'center',
            }
        },
        gridContainer: {
            marginTop: '20px'
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '@media (max-width: 768px) ': {
                flexWrap: 'wrap',
                padding: '1em',
            }
        },
        cover: {
            maxHeight: '400px',
            '@media (max-width: 768px) ': {
                height: '30%'
            }
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        title: {
            fontSize: '2em',
            fontWeight: 800,
            '@media (max-width: 768px) ': {
                fontSize: '1.4em'
            }
        }, parrafo: {
            fontSize: '14px',
            fontWeight: 300
        }, quantity: {
            marginBottom: '5px',
            fontSize: '0.8em'
        }, price: {
            marginBottom: '5px',
            fontSize: '1.8em',
            '@media (max-width: 768px) ': {
                fontSize: '1.2em'
            }
        }
    });
}