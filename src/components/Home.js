import React, { Component } from 'react';
import pic1 from './img/picHome1.jpeg';
import pic2 from './img/picHome2.jpeg';

class Home extends Component {
    state = {}
    render() {
        return (
            <>
                <h1 className='header'>Home Page</h1>
                <div className='home homePics'>
                    <figure >
                        <img src={pic1} alt='pic'></img>
                        <figcaption>All Beers</figcaption>
                        <p>While the beer market is weaker but more centralized in northern Germany, southern Germany has many smaller, local breweries. </p>
                    </figure>

                    <figure >
                        <img src={pic2} alt='pic'></img>
                        <figcaption>All Beers ramdomly</figcaption>
                        <p>Beer is a major part of German culture. German beer is brewed according to the Reinheitsgebot</p>
                    </figure>
                </div>
            </>
        );
    }
}

export default Home;