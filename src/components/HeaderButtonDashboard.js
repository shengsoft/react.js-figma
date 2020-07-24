import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router";

class HeaderButtonDashboard extends React.Component {

    onDashboard = () => {
        this.props.history.push(`/dashboard`)
    }

    onSignOut = () => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <Button color="primary" variant="outlined" style={{ color: '#18A0FB' }} onClick={this.onDashboard}>DashBoard</Button>&nbsp;&nbsp;
                <Button color="basic" variant="contained" style={{ color: '#FFFFFF', backgroundColor: '#18A0FB' }} onClick={this.onSignOut}>Sign Out</Button>
            </div>
        )
    }
}
export default withRouter(HeaderButtonDashboard);