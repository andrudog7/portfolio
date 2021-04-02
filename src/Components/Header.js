import React from 'react' 
import namelogo from '../Assets/namelogo.png'
import { Image} from 'semantic-ui-react';

export default function Github() {
    return (
        <>
        <Image id="namelogo" src={namelogo} size="small" floated="left" centered></Image><br></br>
        <p id="name">ANDREW SMOKER</p>
        </>
    )
}