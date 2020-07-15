import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://material-ui.com/'>
                NextStory
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [loginError, setLoginError] = useState(false);
    const history = useHistory();

    const handleLogin = (event: any) => {
        event.preventDefault();
        setServerErrorMsg('');
        axios.get(`http://localhost:9000/users/notGoogleLogin/${email}/${password}`)
            .then((canLogin: any) => {
                const passwordIsCorrect = canLogin.data;
                console.log('canLogin', canLogin);
                console.log('isLoginSuccessful', passwordIsCorrect);
                // encrypt and save in secure session?
                if (passwordIsCorrect) {
                    localStorage.setItem('isAuthenticated', '1');
                    history.push(`/`);
                } else {
                    setLoginError(true);
                    setServerErrorMsg('Password is incorrect');
                }
            })
            .catch((error: any) => {
                setLoginError(true);
                const errorMsg = error.response?.data?.message || 'There was an error logging in';
                setServerErrorMsg(errorMsg);
                console.log('Error logging in', error);
            });
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePassChange = (event: any) => {
        setPassword(event.target.value);
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FaceIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Login
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleLogin}>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email Address'
                        name='email'
                        autoComplete='email'
                        autoFocus
                        onChange={handleEmailChange}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={handlePassChange}
                    />
                    {loginError &&
                        <Grid item xs={12}>
                            <div style={{ 'color': 'red' }}>
                                {serverErrorMsg}
                            </div>
                        </Grid>
                    }
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href='#' variant='body2'>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='/signup' variant='body2'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
