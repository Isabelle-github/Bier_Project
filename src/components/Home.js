import React, { Component } from 'react';
import pic1 from './img/picHome1.jpeg';
import pic2 from './img/picHome2.jpeg';
import pic from './img/bier1.png';
import {
    Link
} from "react-router-dom";

class Home extends Component {
    state = {}
    render() {
        return (
            <>
                <h1 className='header'>Beer Home</h1>
                <div className='circle'>
                    <img src={pic} alt='logo'></img>
                </div>
                <div className='home homePics'>
                    <figure >
                        <img src={pic1} alt='pic'></img>
                        <Link to="/Biers" className='link'>
                            <figcaption>All Beers</figcaption>
                        </Link>
                        <p>While the beer market is weaker but more centralized in northern Germany, southern Germany has many smaller, local breweries. </p>
                    </figure>

                    <figure >
                        <img src={pic2} alt='pic'></img>
                        <Link to="/Biers/RandomBier" className='link'>
                            <figcaption>A Random Beer</figcaption>
                        </Link>
                        <p>Beer is a major part of German culture. German beer is brewed according to the Reinheitsgebot</p>
                    </figure>
                </div>
            </>
        );
    }
}

export default Home;