import React, { Component } from 'react';
import Nav from './Nav';
import {
    Link
} from "react-router-dom";

class BierDetail extends Component {
    state = {
        BierObj: {},
        isLoaded: false
    }

    async componentDidMount() {
        // console.log('componentdidmount')
        // fetch('https://ih-beers-api2.herokuapp.com/beers')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        try {
            console.log('componentdidmount at bierDetail')
            let id = this.props.match.params.BierID
            console.log(id)
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            const obj = await response.json();
            this.setState({ BierObj: obj, isLoaded: true });
            console.log(this.state.BierObj);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        console.log('BierDetail:' + this.state.BierObj)
        return (
            <div className='BierDetail'>
                <div className='upDiv'>
                    <h1>{this.state.BierObj.name}</h1>
                    <Link to='/Biers'><span>&#8592; Back</span>
                    </Link>
                </div>
                <Nav></Nav>
                {this.state.isLoaded ?
                    <div key={this.props.match.params.BierID} className="single-beer">
                        <img src={this.state.BierObj.image_url} alt='bierImg'></img>
                        <div>
                            <h3>{this.state.BierObj.tagline}</h3>
                            <p>{this.state.BierObj.contributed_by}</p>
                            <p>{this.state.BierObj.description}</p>
                            <p>Made Of: {this.state.BierObj.ingredients.yeast}</p>
                            <p>Food Pairing: {this.state.BierObj.food_pairing}</p>
                            <p>First Brewed On: {this.state.BierObj.first_brewed}</p>
                            <p>Brewer's Tips: {this.state.BierObj.brewers_tips}</p>
                        </div>
                    </div>

                    : <h1>Loading ...</h1>}
            </div>
        );
    }
}

export default BierDetail;