import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData= {
  email: '',
  password: '',
  displayName: ''
}

//Definir el arreglo para las validaciones
const formValidations = {
  email: [ (value) => value.includes('@'), 'El email debe de llevar una @'],
  password: [ (value) => value.length >= 6, 'La contraseña debe de tener más de 6 letras'],
  displayName: [ (value) => value.length >= 1, 'El Nombre es obligatorio'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheeckingAuthentication = useMemo(() => status === 'checking', [status])

  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, emailValid, passwordValid, displayNameValid
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if(!isFormValid) return;

    dispatch( startCreatingUserWithEmailPassword(formState) ) //Mandar los datos del usuario
    
  }
  
  return (
    <AuthLayout title="Crear cuenta">
      {/* <h1>FormValid {isFormValid ? 'Valido' : 'Incorrecto'}</h1> */}
      <form onSubmit={onSubmit} className="animate__animated animate_fadeIn animate__faster">
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted} //las !! lo convierten a booleano
              helperText={displayNameValid} //por defecto displayNameValid tiene el mensaje de error
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Ingrese correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingrese contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid display={!!errorMessage ? '' : 'none'} item xs={12}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid>

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button disabled={isCheeckingAuthentication} type="submit" variant="contained" fullWidth>
                Registrarse
              </Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr: 1}}>Ya tienes cuenta?</Typography>
            <Link color="inherit" component={RouterLink} to="/auth/login">
              {/* esto es solo el estilo y se usa el Link de mui */}
              Ingresa aquí
            </Link>
          </Grid>
          
        </Grid>
      </form>
    </AuthLayout>
  );
};
