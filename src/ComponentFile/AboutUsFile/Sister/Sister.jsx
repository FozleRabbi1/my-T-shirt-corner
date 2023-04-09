import React, { useContext } from 'react';
import SisFriends from './SisFriends';
import { RingContext } from '../GrandFother/GrandFother';

const Sister = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h6>sister</h6>
            <SisFriends></SisFriends>     
            <small>Ring : {ring}</small>       
        </div>
    );
};

export default Sister;