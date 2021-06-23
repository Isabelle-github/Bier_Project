import React, { Component } from 'react';
import Nav from './Nav';
import {
    Link
} from "react-router-dom";
class RandomBier extends Component {

    state = {
        data: [],
        randomIndex: '5'
    }


    // createRandomIndex = () => {
    //     this.setState({ randomIndex: Math.floor((Math.random() * 10)) });
    // };

    // componentDidMount() {
    //     console.log('componentdid Mount at RandomBier');
    //     fetch(`https://ih-beers-api2.herokuapp.com/beers`)
    //         .then(response => response.json())
    //         .then(data1 => console.log(data1))
    //     this.setState({ data: data1 });
    //     console.log(this.state.data);
    // }
    async componentDidMount() {
        try {
            console.log('componentdidmount at RandomBier')
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
            const data1 = await response.json();
            this.setState({ data: { ...data1 } });
            this.setState({ randomIndex: Math.floor((Math.random() * 25)) })

            console.log(this.state.data);
            console.log('Hierrrr: ' + this.state.data[1]);
            console.log('Mit JSon Stringify: ' + JSON.stringify(this.state.data[1]));
            console.log('Mit JSon Parse: ' + JSON.parse(JSON.stringify(this.state.data[1])));
            console.log(this.state.randomIndex)
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <div className='BierDetail'>
                <Nav></Nav>
                {/* <div className='upDiv'>
                    <h1>{this.state.data[1].name}</h1>
                    <Link to='/Biers'><span>&#8592; Back</span>
                    </Link>
                </div> */}

                {/* {this.state.isLoaded ?
                    <div key={this.state.data[this.state.randomIndex]._id} className="single-beer">
                        <img src={this.state.data[this.state.randomIndex].image_url} alt='bierImg'></img>
                        <div>
                            <h3>{this.state.data[this.state.randomIndex].tagline}</h3>
                            <p>{this.state.data[this.state.randomIndex].contributed_by}</p>
                            <p>{this.state.data[this.state.randomIndex].description}</p>
                            <p>Made Of: {this.state.data[this.state.randomIndex].ingredients.yeast}</p>
                            <p>Food Pairing: {this.state.data[this.state.randomIndex].food_pairing}</p>
                            <p>First Brewed On: {this.state.data[this.state.randomIndex].first_brewed}</p>
                            <p>Brewer's Tips: {this.state.data[this.state.randomIndex].brewers_tips}</p>
                        </div>
                    </div>

                    : <h1>Loading ...</h1>} */}
            </div>
        );
    }
}

export default RandomBier;