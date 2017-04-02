import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class CarDetail extends Component {
    handleRedirect(){
        browserHistory.push('/cars');
    }
    render(){
        const cars = this.props.route.data;
        const id = this.props.params.id;
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="image" style={{backgroundColor: 'yellow'}}>
                                <img src={car[0].media} alt={car[0].name} />
                                <div className="filter">
                                    <button type="button" className="btn btn-neutral btn-simple">
                                        <i className="fa fa-bookmark-o"></i> Bookmark
                                    </button>
                                    <button type="button" className="btn btn-neutral btn-simple">
                                        <i className="fa fa-align-left"></i> Read article
                                    </button>
                                </div>
                            </div>
                            <div className="content">
                                <a className="card-link" href="#">
                                    <h4 className="title">{car[0].name}</h4>
                                </a>
                                {car[0].detailPara}
                                <div className="footer">
                                    <div className="author">
                                        <a className="card-link" href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                            <span> {car[0].author} </span>
                                        </a>
                                    </div>
                                    <div className="stats pull-right">
                                        <a className="card-link" href="#">
                                            <i className="fa fa-heart"></i> 892
                                        </a>
                                    </div>
                                    <div className="stats pull-right">
                                        <a className="card-link" href="#">
                                            <i className="fa fa-comment"></i> 411
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail