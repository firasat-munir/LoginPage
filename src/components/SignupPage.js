import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Avatar, Button, CssBaseline, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { TextField } from './TextField';


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'All Rights Reserved. Copyright © '}
        <Link color="inherit" href="http://www.asrasoft.net/">AsraSoft</Link>
        {' '}{new Date().getFullYear()}{'.'}
      </Typography>
    );
  }

const theme = createTheme();

export default function SignupPage() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', width:50, height:50 }}>
            <PermIdentityIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 1, mb: 3 }}>
                Sign up
          </Typography>
          
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
              console.log(values)
            }}
          >
          {formik => (
            <div>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="First Name" name="firstName" type="text" />
                    {/* <TextField
                      autoComplete="off"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      type="text"
                      autoFocus
                    />
                    <ErrorMessage component="div" name="firstName" className="error" /> */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Last Name" name="lastName" type="text" />
                    {/* <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      type="text"
                      autoComplete="off"
                    />
                    <ErrorMessage component="div" name="lastName" className="error" /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Email" name="email" type="email" />
                    {/* <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="off"
                    />
                    <ErrorMessage component="div" name="email" className="error" /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Password" name="password" type="password" />
                    {/* <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="off"
                    />
                    <ErrorMessage component="div" name="password" className="error" /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Confirm Password" name="confirmPassword" type="password" />
                    {/* <TextField
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmpassword"
                      autoComplete="off"
                    />
                    <ErrorMessage component="div" name="confirmPassword" className="error" /> */}
                  </Grid>
                </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Button
                type="reset"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
              >
                Reset
              </Button>
              </Form>
            </div>
          )}
        </Formik>
        <Box component="form" sx={{ mt: 3 }}> 
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
            {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Button
              type="reset"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}