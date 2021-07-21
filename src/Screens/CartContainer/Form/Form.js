import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FormStyle } from './FormStyle.js';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../../Context/Context.js';
const useStyles = makeStyles((theme) => FormStyle(theme));
export const Form = ({ setUserInfo }) => {
    const classes = useStyles();
    const context = useContext(CartContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.name === '' || formData.surname === '' || formData.phone === '' || formData.email === '') {
            Swal.fire({ icon: 'warning', title: 'Aviso!', text: 'Complete todos los campos para continuar' });
        } else if (context.cart.length === 0) {
            Swal.fire({ icon: 'error', title: 'Oops...', text: 'No tiene items en el carrito!' });
        } else {
            Swal.fire({
                title: 'Desea terminar la compra?',
                icon: 'question',
                showDenyButton: true,
                confirmButtonText: 'Comprar!',
                denyButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    setUserInfo(formData);
                }
            });
        }
    };
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };
    const [formData, setFormData] = useState({ name: '', surname: '', phone: '', email: '' });
    return (<div className={classes.itemsContainer}>
        <span className={classes.centrado}>Formulario de compra</span>
        <form id="formularioUsuario" className={classes.root} noValidate autoComplete="off">
            <TextField id="name" label="Nombre" type="text" color="secondary" onChange={handleChange} />
            <TextField id="surname" label="Apellido" type="text" color="secondary" onChange={handleChange} />
            <TextField id="phone" label="Telefono" type="tel" color="secondary" onChange={handleChange} />
            <TextField id="email" label="Email" type="email" color="secondary" onChange={handleChange} />
            <Button className={classes.buttons}>
                <Link to="/cart" className={classes.linkText} onClick={handleSubmit} > Realizar compra </Link>
            </Button>
        </form>
    </div >);
}