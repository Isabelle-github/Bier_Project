import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import pic from './img/bier1.png';

class Nav extends Component {
    state = {}
    render() {
        return (
            <Link to="/" className='nav'>
                <div className='circle'>
                    <img src={pic} alt='logo'></img>
                </div>
            </Link>
        );
    }
}

export default Nav;