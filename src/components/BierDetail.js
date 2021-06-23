import React, { Component } from 'react';
import Nav from './Nav';
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
        return (
            <div className='BierDetail'>
                <h1>Details</h1>
                <Nav></Nav>
                {this.state.isLoaded ?
                    <div key={this.props.match.params.BierID} className="bier-item">
                        <img src={this.state.BierObj.image_url} alt='bierImg'></img>
                        <div>
                            <h3>{this.state.BierObj.name}</h3>
                            <h4>{this.state.BierObj.tagline}</h4>
                            <p>{this.state.BierObj.contributed_by}</p>
                        </div>
                    </div>

                    : <h1>Loading ...</h1>}
            </div>
        );
    }
}

export default BierDetail;