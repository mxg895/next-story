import React, {useState} from 'react';
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
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

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
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export default function SignUp() {
    const classes = useStyles();
    const [signUpError, setSignUpError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const history = useHistory();

    const host = window.location.protocol + '//'+ window.location.host;

    const postNewUser = (newUserObject: any, isGoogle: boolean) => {
        axios.post(host + `/users/signUp`, newUserObject)
            .then((profile: any) => {
                const userId = profile.data.userId;
                const username = profile.data.name;
                const time = new Date();
                time.setSeconds(time.getSeconds() + 3599); // same as google auth timeout
                const authObject = {
                    expiry: time,
                    username: username,
                    userId: userId,
                    isGoogleLogin: isGoogle
                };
                sessionStorage.setItem('NS-session-data', JSON.stringify(authObject));
                history.push(`/`);
            })
            .catch((error: any) => {
                setSignUpError(true);
                const errorMsg = error.response.data.message;
                setErrorMsg(errorMsg);
                console.log('Error signing up', error);
            });
    };

    const handleSignUp = (event: any) => {
        event.preventDefault();
        if (!userName || ! email || !password || !confirmPass) {
            setSignUpError(true);
            setErrorMsg('All fields must be filled in');
            return;
        }
        if (password !== confirmPass) {
            setSignUpError(true);
            setErrorMsg('Passwords do not match');
            return;
        }
        setSignUpError(false);
        postNewUser({
            userName: userName,
            email: email,
            textPass: password
        }, false);
    };

    const handleNameChange = (event: any) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
        setSignUpError(false);
        setErrorMsg('');
    };

    const handlePassChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassChange = (event: any) => {
        setConfirmPass(event.target.value);
    };

    const onSignUpSuccess = (response: any) => {
        console.log('response: ', response);
        setSignUpError(false);
        const googleName = response.profileObj.name;
        const googleEmail = response.profileObj.email;
        if (googleEmail) {
            const userObj = {
                userName: googleName,
                email: googleEmail
            };
            postNewUser(userObj, true);
        }
    };

    const onSignUpFailure = (response: any) => {
        console.log('onFailure');
        console.log('response: ', response);
        setSignUpError(true);
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FaceIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSignUp}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete='name'
                                name='userName'
                                variant='outlined'
                                required
                                fullWidth
                                id='userName'
                                label='User Name'
                                onChange={handleNameChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                id='email'
                                label='Email Address'
                                name='email'
                                autoComplete='email'
                                onChange={handleEmailChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                name='password'
                                label='Password'
                                type='password'
                                id='password'
                                autoComplete='current-password'
                                onChange={handlePassChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant='outlined'
                                required
                                fullWidth
                                name='confirmPassword'
                                label='Confirm Password'
                                type='password'
                                id='confirmPassword'
                                autoComplete='confirm-password'
                                onChange={handleConfirmPassChange}
                            />
                        </Grid>
                        {signUpError &&
                            <Grid item xs={12}>
                                <div style={{ 'color': 'red' }}>
                                    {errorMsg || 'There was an error signing up'}
                                </div>
                            </Grid>
                        }
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                        <span style={{ 'marginRight': '5px' }}>
                            Or sign up with Google
                        </span>
                        <GoogleLogin
                            clientId='279438615331-cvlr0tk0j35i4s9df4m51o9sb5uj8k3s.apps.googleusercontent.com'
                            buttonText='Sign up'
                            onSuccess={onSignUpSuccess}
                            onFailure={onSignUpFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                    <br/>
                    <br/>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Link href='/login' variant='body2'>
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
