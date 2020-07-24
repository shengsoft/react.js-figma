import React from 'react';

import MainLogo from '../assets/images/main_logo.png';


class Footer extends React.Component {

    render() {
        return (
            <div>
                <img src={MainLogo} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '4%', marginTop: '150px' }} />
                <div style={{ margin: '20px', height: '2px', backgroundColor: 'grey' }} />
                <p style={{ textAlign: 'center' }} >© SynchIT 2020</p>

            </div>
        )
    }
}
export default Footer;