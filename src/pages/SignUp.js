import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Login } from '../actions';

import { TextField, Button, Grid } from '@material-ui/core';
import { withRouter } from "react-router";


import Header from '../components/Header';
import Footer from '../components/footer'

function SignUp(props) {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [FirstName, setFirstName] = React.useState('');
    const [LastName, setLastName] = React.useState('');

    const onEmail = (e) => { setEmail(e.target.value) }
    const onPassword = (e) => { setPassword(e.target.value) }
    const onFirstName = (e) => { setFirstName(e.target.value) }
    const onLastName = (e) => { setLastName(e.target.value) }
    const onSignup = () => {
        if (email != '' && password != '' && FirstName != '' && LastName != '') {
            dispatch(Login())
            props.history.push(`/dashboard`)
        } else {
            alert("please input all field !")
        }

    }

    return (
        <div>
            <Header />
            <h1 style={{ textAlign: 'center', fontSize: '45px', marginTop: '150px' }}>Sign Up</h1>
            <p style={{ textAlign: 'center', fontSize: '30px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '60%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <div style={{ borderStyle: 'groove', borderColor: "black", borderWidth: '1px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%', padding: '45px' }}>
                <h2>Sign Up</h2>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="First Name"
                            margin="dense"
                            name="FirstName"
                            required
                            onChange={onFirstName}
                            value={FirstName}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            margin="dense"
                            name="LastName"
                            required
                            onChange={onLastName}
                            value={LastName}
                            variant="outlined"
                        />
                    </Grid>
                </Grid><p />
                <TextField
                    fullWidth
                    label="Email address"
                    margin="dense"
                    name="email"
                    required
                    onChange={onEmail}
                    value={email}
                    variant="outlined"
                // helperText="Please input Email"
                /> <p />
                <TextField
                    fullWidth
                    type="password"
                    label="Create Password"
                    margin="dense"
                    name="Password"
                    required
                    onChange={onPassword}
                    value={password}
                    variant="outlined"
                // helperText="Please input Password"
                /><p /><p />
                <Button color="basic" variant="contained" style={{ color: '#FFFFFF', backgroundColor: '#18A0FB' }} onClick={onSignup}>Sign Up</Button>
            </div>
            <Footer />
        </div>
    )
}
export default withRouter(SignUp);