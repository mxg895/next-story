import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import '../../App.css';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';


const Forms: React.FC = () => {
    return (
        <Container maxWidth='md'>
            <Login></Login>
            <SignUp></SignUp>
        </Container>
    );
};

export default Forms;
