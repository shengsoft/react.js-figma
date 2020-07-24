import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router";

class HeaderButtonAuthOn extends React.Component {

    onSignin=()=>{
        this.props.history.push(`/signin`)
    }

    onSignup=()=>{
        this.props.history.push(`/signup`)
    }

    render() {
        return (
            <div>
                <Button color="primary" variant="outlined" style={{ color: '#18A0FB' }} onClick={this.onSignin}>Sign In</Button>&nbsp;&nbsp;
                <Button color="basic" variant="contained" style={{ color: '#FFFFFF', backgroundColor: '#18A0FB' }} onClick={this.onSignup}>Sign Up</Button>
            </div>
        )
    }
}
export default withRouter(HeaderButtonAuthOn);