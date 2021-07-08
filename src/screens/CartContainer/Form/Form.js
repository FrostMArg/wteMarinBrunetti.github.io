import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FormStyle } from './FormStyle.js';

const useStyles = makeStyles((theme) => FormStyle(theme));

export const Form = ({ setUserInfo }) => {
    const classes = useStyles();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.name === '' || formData.surname === '' || formData.phone === '' || formData.email === '') {
            alert('Llená todos los campos.');
            // Aviso al usuario
        } else {
            setUserInfo(formData);
        }
    };
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };
    const [formData, setFormData] = useState({ name: '', surname: '', phone: '', email: '' });
    return (<div className={classes.itemsContainer}>
        <span className={classes.centrado}>Formulario de compra</span>
        <form id="formularioUsuario" className={classes.root} noValidate autoComplete="off">
            <TextField id="name" label="Nombre" color="secondary" onChange={handleChange} />
            <TextField id="surname" label="Apellido" color="secondary" onChange={handleChange} />
            <TextField id="phone" label="Telefono" color="secondary" onChange={handleChange} />
            <TextField id="email" label="Email" color="secondary" onChange={handleChange} />
            <Button className={classes.buttons}>
                <Link to="/cart" className={classes.linkText} onClick={handleSubmit} > Realizar compra </Link>
            </Button>
        </form>
    </div >);
}

