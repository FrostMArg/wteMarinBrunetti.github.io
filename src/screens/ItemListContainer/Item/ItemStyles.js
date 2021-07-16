export const ItemStyle = (theme) => {
    return ({
        root: {
            maxWidth: 300,
            height: 500,
            margin: '20px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        },
        '& > p': {
            fontSize: "0.3rem"
        },
        media: {
            maxWidth: '100%',
            paddingTop: '56.25%',
        },
        price: {
            color: "grey",
            fontSize: 22
        },
        centrado: {
            textAlign: "center"
        },
        title: {
            fontSize: "1.2rem",
            textAlign: "center",
        },
        subheader: {
            fontSize: "0.9rem",
            textAlign: "center",
            color: "#3f51b5",
            fontWeight: "bold"
        },
        p: {
            fontSize: "0.3rem",
        }
    });
};