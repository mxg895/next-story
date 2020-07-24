import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

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
        margin: theme.spacing(2, 0, 2)
    }
}));

export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loginError, setLoginError] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isGoogleLogin, setIsGoogleLogin] = useState(false);

    const history = useHistory();
    const host = window.location.protocol + '//'+ window.location.host;
    useEffect(() => {
        const sessionDataString = sessionStorage.getItem('NS-session-data');
        const sessionDataObj = sessionDataString && JSON.parse(sessionDataString);
        const loginExpiry = sessionDataObj?.expiry;
        const loggedIn = loginExpiry && new Date(loginExpiry) > new Date();
        const googleLogin = sessionDataObj?.isGoogleLogin;
        setIsLoggedIn(loggedIn);
        setIsGoogleLogin(googleLogin);
    }, []);

    const handleLogin = (event: any) => {
        event.preventDefault();
        if (! email || !password) {
            setLoginError(true);
            setErrorMsg('All fields must be filled in');
            return;
        }
        setLoginError(false);
        axios.get(host + `/users/notGoogleLogin/${email}/${password}`)
            .then((profile: any) => {
                const passwordIsCorrect = profile.data.passwordCorrect;
                if (passwordIsCorrect) {
                    const userId = profile.data.userId;
                    const username = profile.data.name;
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 3599); // same as google auth timeout
                    const authObject = {
                        expiry: time,
                        username: username,
                        userId: userId,
                        isGoogleLogin: false
                    };
                    sessionStorage.setItem('NS-session-data', JSON.stringify(authObject));
                    history.push(`/`);
                } else {
                    setLoginError(true);
                    setErrorMsg('Password is incorrect');
                }
            })
            .catch((error: any) => {
                setLoginError(true);
                const errorMsg = error.response?.data?.message || 'There was an error logging in';
                setErrorMsg(errorMsg);
                console.log('Error logging in', error);
            });
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePassChange = (event: any) => {
        setPassword(event.target.value);
    };

    const onLoginSuccess = (response: any) => {
        console.log('response: ', response);
        const googleEmail = response.profileObj.email;
        if (googleEmail) {
            axios.get(host + `/users/googleLogin/${googleEmail}`)
                .then((profile: any) => {
                    const userId = profile.data.userId;
                    const username = profile.data.name;
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 3599); // same as google auth timeout
                    const authObject = {
                        expiry: time,
                        username: username,
                        userId: userId,
                        isGoogleLogin: true
                    };
                    sessionStorage.setItem('NS-session-data', JSON.stringify(authObject));
                    history.push(`/`);
                })
                .catch((error: any) => {
                    setLoginError(true);
                    const errorMsg = error.response?.data?.message || 'There was an error logging in';
                    setErrorMsg(errorMsg);
                    console.log('Error logging in', error);
                });
        }
    };

    const onLoginFailure = (response: any) => {
        console.log('on login Failure');
        console.log('response: ', response);
        setLoginError(true);
        setErrorMsg('There was an error logging in');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('NS-session-data');
        setIsLoggedIn(false);
        setIsGoogleLogin(false);
    };

    const handleGoogleLogout = () => {
        sessionStorage.removeItem('NS-session-data');
        setIsLoggedIn(false);
        setIsGoogleLogin(false);
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
                {!isLoggedIn ? <form className={classes.form} noValidate onSubmit={handleLogin}>
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
                                {errorMsg}
                            </div>
                        </Grid>
                    }
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Log In
                    </Button>
                    <span style={{ 'marginRight': '5px' }}>
                        Or login with Google
                    </span>
                    <GoogleLogin
                        clientId='279438615331-cvlr0tk0j35i4s9df4m51o9sb5uj8k3s.apps.googleusercontent.com'
                        buttonText='Login'
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    <br/>
                    <br/>
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
                :
                    <>
                        <div style={{ 'color': 'red', 'margin': '20px' }}>
                        You are already signed in
                        </div>
                        <Link href='/' variant='body2'>
                        Go to home
                        </Link>
                        <div style={{ 'margin': '10px' }}>
                        Or
                        </div>
                        {isGoogleLogin ? <GoogleLogout
                                clientId='279438615331-cvlr0tk0j35i4s9df4m51o9sb5uj8k3s.apps.googleusercontent.com'
                                buttonText='Logout'
                                onLogoutSuccess={handleGoogleLogout}
                            />
                            :
                            <Button color={'primary'} onClick={handleLogout} >
                                Logout
                            </Button>
                        }
                    </>
                }
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
