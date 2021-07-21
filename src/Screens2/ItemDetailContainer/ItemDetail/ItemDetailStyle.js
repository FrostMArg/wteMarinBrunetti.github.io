export const ItemDetailStyle = theme => {
    return ({
        root: {
            display: 'flex',
            minHeight: '100%',
            border: 'none',
        },
        cardRoot: {
            display: 'flex',
            border: 'none',
            padding: '2em',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            justifyContent: "space-around",
            '@media (max-width: 960px) ': {
                flexWrap: 'nowrap',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0,
            }
        },
        gridContainer: {
            marginTop: '20px',
            marginBottom: '2em',
            '@media (max-width: 425px) ': {
                width: '100%',
            },
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '50%',
            '@media (max-width: 960px) ': {
                flexWrap: 'wrap',
                maxWidth: '100%',
            }
        },
        cover: {
            maxWidth: '300px',
            '@media (max-width: 960px) ': {
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
            paddingBottom: theme.spacing(2),
            '@media (max-width: 960px) ': {
                fontSize: '1.4em'
            }
        }, parrafo: {
            fontSize: '14px',
            fontWeight: 300,
            paddingBottom: theme.spacing(2),
        }, quantity: {
            marginBottom: '5px',
            fontSize: '0.8em',
            textAlign: 'right',
        }, price: {
            marginBottom: '5px',
            fontSize: '1.4em',
            color: "#3f51b5",
            fontWeight: "bold",
            '@media (max-width: 960px) ': {
                fontSize: '1.2em'
            }
        }
    });
}