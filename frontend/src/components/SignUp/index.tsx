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
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [signUpError, setSignUpError] = useState(false);
    const [serverErrorMsg, setServerErrorMsg] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const history = useHistory();

    const handleSignUp = (event: any) => {
        event.preventDefault();
        if (password === confirmPass) {
            setPasswordMismatch(false);
            axios.post(`http://localhost:9000/users/notGoogleSignUp`,
                {
                    userName: userName,
                    email: email,
                    textPass: password
                })
                .then((profile: any) => {
                    const userId = profile.data.userId;
                    const username = profile.data.name;
                    // encrypt and save in secure session?
                    history.push(`/`);
                })
                .catch((error: any) => {
                    setSignUpError(true);
                    const errorMsg = error.response.data.message;
                    setServerErrorMsg(errorMsg);
                    console.log('Error signing up', error);
                });
        } else {
            setPasswordMismatch(true);
        }
    };

    const handleNameChange = (event: any) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
        setSignUpError(false);
        setServerErrorMsg('');
    };

    const handlePassChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassChange = (event: any) => {
        setConfirmPass(event.target.value);
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
                        {passwordMismatch &&
                            <Grid item xs={12}>
                                <div style={{ 'color': 'red' }}>Passwords do not match</div>
                            </Grid>
                        }
                        {signUpError &&
                            <Grid item xs={12}>
                                <div style={{ 'color': 'red' }}>
                                    {serverErrorMsg || 'There was an error signing up'}
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
