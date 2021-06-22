import React, { Component } from 'react';
import Nav from './Nav';
import BierItem from './BierItem';

class Biers extends Component {
    state = {
        data: [],

    }
    async componentDidMount() {
        // console.log('componentdidmount')
        // fetch('https://ih-beers-api2.herokuapp.com/beers')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        try {
            console.log('componentdidmount')
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
            const data1 = await response.json();
            this.setState({ data: data1 });
            console.log(this.state.data);
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <div className='home biers'>
                <Nav></Nav>
                <h1>All Beers</h1>
                <BierItem bierdata={this.state.data}></BierItem>
            </div>
        );
    }
}

export default Biers;