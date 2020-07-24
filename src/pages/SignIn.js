import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Login } from '../actions'

import { TextField, Button } from '@material-ui/core';
import { withRouter } from "react-router";

import Header from '../components/Header';
import Footer from '../components/footer'

function SignIn(props) {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onEmail = (e) => {
        setEmail(e.target.value);
    };

    const onPassword = (e) => {
        setPassword(e.target.value);
    };

    const onSignin = () => {
        dispatch(Login())
        props.history.push(`/dashboard`)
    }

    return (
        <div>
            <Header />
            <h1 style={{ textAlign: 'center', fontSize: '45px', marginTop: '150px' }}>Sign In</h1>
            <div style={{ borderStyle: 'groove', borderColor: "black", borderWidth: '1px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%', padding: '45px' }}>
                <h2>Sign In</h2>
                <TextField
                    fullWidth
                    label="Email"
                    margin="dense"
                    name="email"
                    onChange={onEmail}
                    required
                    value={email}
                    variant="outlined"
                // helperText="Please input Email"
                /> <p />
                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    margin="dense"
                    name="Password"
                    onChange={onPassword}
                    required
                    value={password}
                    variant="outlined"
                // helperText="Please input Password"
                /><p /><p />
                <Button color="basic" variant="contained" style={{ color: '#FFFFFF', backgroundColor: '#18A0FB' }} onClick={onSignin }>Sign In</Button>
            </div>
            <Footer />


        </div>
    )
}


export default withRouter(SignIn);