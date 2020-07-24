import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import HeaderButtonAuthOn from './HeaderButtonAuthOn';
import HeaderButtonAuthOff from './HeaderButtonAuthOff';
import HeaderButtonDashboard from './HeaderButtonDashboard';
import smallLogo from '../assets/images/small_logo.png';

function Header() {
    const isLogged = useSelector(state => state.isLogged);
    const userEdit = useSelector(state => state.userEdit);
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{ display: 'inline-block' }}>
                <img src={smallLogo} style={{ marginLeft: '25px', marginTop: '10px' }} />
            </div>
            <div style={{ display: 'inline-block', float: 'right', marginRight: '25px', marginTop: '10px' }}>

                {isLogged ? <>
                    {
                        userEdit ?<HeaderButtonDashboard/>: <HeaderButtonAuthOff />
                    }
                </> : <HeaderButtonAuthOn />}


            </div>

        </div>
    )
}




export default Header;