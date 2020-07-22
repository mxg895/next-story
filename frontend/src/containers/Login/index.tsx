import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '../Container';
import '../../App.css';
import Login from '../../components/Login';


const LoginForm: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Login />
        </Container>
    );
};

export default LoginForm;
