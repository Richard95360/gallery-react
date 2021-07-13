import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class HitItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="col-md-4" key={this.props.hit.id}>
            <div className="card">
                <div className="card-header">{this.props.hit.tags} | {this.props.hit.webformatWidth} x {this.props.hit.webformatHeight}</div>
                <div className="card-body">
                    <img className="card-img" height={200} src={this.props.hit.webformatURL} alt="hit" />

                </div>
                <div>
                    <Link  to={"/hitDetails/"+this.props.hit.id } className="btn btn-success">Hit Details</Link>
                </div>
            </div>
        </div>
        );
    }
}

export default HitItem;

/* 
 import React from 'react';
import { Link } from 'react-router-dom';

const HitItem = (props) => {

    console.log(props.webformatHeight);
    
    return (
        <div className="col-md-4" key={props.hit.id}>
                        <div className="card">
                            <div className="card-header">{props.id.tags} | {props.hit.webformatWidth} x {props.hits.webformatHeight}</div>
                            <div className="card-body">
                                <img className="card-img" height={200} src={props.hit.webformatURL} alt="hit" />

                            </div>
                            <div>
                                <Link  to={"/hitDetails/"+props.hit.id } className="btn btn-success">Hit Details</Link>
                            </div>
                        </div>
                    </div>
    );
};

export default HitItem;  */