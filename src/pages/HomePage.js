import React from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router";

import Header from '../components/Header';
import Footer from '../components/footer'
import MainLogo from '../assets/images/main_logo.png';
// import "../assets/css/Allstyle.css";

class HomePage extends React.Component {

    onSignup=()=>{
        this.props.history.push(`/signup`)
    }

    render() {
        return (
            <div>
                <Header />
                <img src={MainLogo} style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'30%', marginTop:'150px'}} />
                <Button onClick={this.onSignup} color="basic" variant="contained" style={{ color: '#FFFFFF', backgroundColor: '#18A0FB',display:'block', marginLeft:'auto', marginRight:'auto', width:'10%', marginTop:'50px' }}>Sign Up</Button>
                <br/> <h1 style={{textAlign:"center", fontSize:'45px'}}>Synch yo' self</h1>
                <Footer/>
            </div>
        )
    }
}
export default withRouter(HomePage);