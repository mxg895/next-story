import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import SignUp from '../../components/SignUp';
import Container from '../Container';


const SignUpForm: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <SignUp />
        </Container>
    );
};

export default SignUpForm;
