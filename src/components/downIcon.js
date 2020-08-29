import React from 'react';
import data from '../data.json';
import { SocialIcon } from 'react-social-icons';


const DownIcon = (props) => {
    return (
        <div>
            <img src={props.icon} style={{ maxWidth: '40px', marginTop: '230px' }} />
        </div>
    )
}

export default DownIcon;