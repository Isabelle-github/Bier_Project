
import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class BierItem extends Component {
    state = {}
    // console.log(props)
    render() {
        console.log('BierItems:' + this.props.bierdata)
        console.log('Hier mit JSON: ' + JSON.stringify(this.props.bierdata))
        return (
            <div className='displayItems'>
                {this.props.bierdata.length > 0 ? (
                    this.props.bierdata.map(item => {
                        return (
                            <div key={item._id} className="bier-item">
                                <img src={item.image_url} alt='bierImg'></img>
                                <div>
                                    <h3>{item.name}</h3>
                                    <h4>{item.tagline}</h4>
                                    <p>{item.contributed_by}</p>
                                    <Link to={`/Biers/${item._id}`}>Details</Link>
                                </div>
                            </div>
                        )
                    }
                    )
                ) : <h1>fetching data ...</h1>}
            </div>
        );
    }

}

export default BierItem;
