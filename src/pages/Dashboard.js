import React from 'react';
import { withRouter } from "react-router";
import { Grid, Button } from '@material-ui/core';

import Header from '../components/Header';
import Footer from '../components/footer';
import CalendarShow from '../components/CalendarShow';

import ProfileDefaultImage from '../assets/images/profile1.png';

// import "../assets/css/Allstyle.css";

class DashBoard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            profileImage:ProfileDefaultImage,
        }
    }

    onSignup = () => {
        this.props.history.push(`/signup`)
    }

    onChangeCardImageFile=(event)=>{if(event.target.files){this.setState({ profileImage: URL.createObjectURL(event.target.files[0]) })}}

    render() {
        return (
            <div>
                <Header />
                <h1 style={{ textAlign: 'center', fontSize: '45px' }}>Dashboard</h1>
                <Grid container style={{ padding: '50px' }}>
                    <Grid sm={6} xs={12} item >
                        <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
                            <br /><br /><br /><br /><br /><img src={this.state.profileImage} width="50%" /><br />
                            <input id="myInput" type="file" ref={(ref) => this.myInput102 = ref} style={{ display: 'none' }} onChange={this.onChangeCardImageFile} />
                            <p style={{ cursor: 'pointer', color: '#9D00B7' }} onClick={(e) => this.myInput102.click()}>Edit profile picture</p>
                            <h1>User name</h1>
                            <p style={{ cursor: 'pointer', color: '#9D00B7' }} onClick={() => alert('sdf')} >Edit your availability</p>
                            <p style={{ cursor: 'pointer', color: '#9D00B7' }} onClick={() => alert('sdf')} >show team availability</p>
                            <p style={{ cursor: 'pointer', color: '#9D00B7' }} onClick={() => alert('sdf')} >Cancel your membership</p>

                        </div>


                    </Grid>
                    <Grid sm={6} xs={12} item>
                        <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>
                            <p style={{ fontSize: '30px', textAlign: 'center' }}>Your availabilty</p>
                            <CalendarShow />
                        </div>
                    </Grid>
                </Grid>

                <Footer />
            </div>
        )
    }
}
export default withRouter(DashBoard);