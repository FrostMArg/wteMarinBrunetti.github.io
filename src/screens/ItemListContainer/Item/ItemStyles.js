export const ItemStyle = (theme) => {
    return ({
        root: {
            maxWidth: 300,
            Height: 450,
            margin: '20px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',

        },
        '& > p': {
            fontSize: "0.5rem"
        },
        media: {
            maxWidth: '100%',
            paddingTop: '56.25%', // 16:9
        },
        price: {
            color: "grey",
            fontSize: 22
        },
        centrado: {
            textAlign: "center"
        },
    });
};

