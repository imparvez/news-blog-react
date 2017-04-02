import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
    render(){
        // Get data from route props
        const cars = this.props.route.data;
        // Map through cars and return linked cars
        const carNode = cars.map((car) => {
            return (
            	<div className="list-cards">
            		<div className="image-container" style={{backgroundColor: 'yellow'}}>
            			<img src={car.media} alt={car.name} />
            		</div>
	                <div className="list-content">
	                	<h4 className="title">
			                <Link
			                    to={"/cars/"+car.id}
			                    key={car.id}>
			                    {car.name}
			                </Link>
		                </h4>
	                	<p>{car.listPara}</p>
	                </div>
                </div>
            )
        });
        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car