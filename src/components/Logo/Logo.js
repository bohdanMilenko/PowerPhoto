import React from "react";
import Tilt from 'react-tilt'
import './Logo.css'
import logoIcon from './rocket.png'


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-5" options={{max: 35, scale: 1.1, reverse: true}} style={{height: 150, width: 150}}>
                <div className="Tilt-inner">
                    <img style={{ paddingTop: '25px', maxWidth: 90, maxHeight: 90}}alt='logo' src={logoIcon} /></div>
            </Tilt>
        </div>

    )

}

export default Logo;