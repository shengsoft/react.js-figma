import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Logout} from '../actions'

import { Button } from '@material-ui/core';
import { withRouter } from "react-router";


function HeaderButtonAuthOff(props){
    const dispatch = useDispatch();

    const onSignOut=()=>{
        dispatch(Logout())
        props.history.push(`/`)
    }
    
    return (
        <div>
            <Button color="basic" variant="contained" style={{ color: '#FFFFFF', backgroundColor: '#18A0FB' }} onClick={onSignOut}>Sign Out</Button>
        </div>
    )
}
 
export default withRouter(HeaderButtonAuthOff);