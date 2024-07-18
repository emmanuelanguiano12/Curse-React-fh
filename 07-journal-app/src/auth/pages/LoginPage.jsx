import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks";

export const LoginPage = () => {

  const {status, errorMessage} = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
  })

  const isAuthenticated = useMemo(() => status === 'checking', [status])
  

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch( startLoginWithEmailAndPassword({email, password}) ) //accion a mandar a llamar con email y password
    //Primero LoginPage -> thunks -> Providers o viceversa

  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayout title="login">
      <form onSubmit={onSubmit} className="animate__animated animate_fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Ingrese correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>

          <Grid display={!!errorMessage ? '' : 'none'} container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid item xs={12}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid>

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" component={RouterLink} to="/auth/register">
              {" "}
              {/* esto es solo el estilo y se usa el Link de mui */}
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
