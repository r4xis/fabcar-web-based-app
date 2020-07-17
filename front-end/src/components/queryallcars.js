import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class QueryAllCars extends Component {
	constructor(props) {
		super(props);
		this.carList = this.carList.bind(this);
		this.state = { cars: {} };
	}

	async componentDidMount() {
		const url = "http://localhost:8080/api/queryallcars";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ cars: data.response});
	}

	carList() {
		let res=[];
		for(var i =0; i < this.state.cars.length; i++){
			res.push(
				<tr>
					<td>{this.state.cars[i].Key}</td>
					<td>{this.state.cars[i].Record.make}</td>
					<td>{this.state.cars[i].Record.model}</td>
					<td>{this.state.cars[i].Record.colour}</td>
					<td>{this.state.cars[i].Record.owner}</td>
				</tr>
			)
		}
		return res;
 	}

	render() {
		return (
			/*<div>
				<table className="table">*/
			<body className="bg_queryAll">
				<Table striped bordered hover className="table">
					<thead>
						<tr>
							<th>CAR ID</th>
							<th>MAKE</th>
							<th>MODEL</th>
							<th>COLOR</th>
							<th>OWNER</th>
						</tr>
					</thead>
					<tbody>
						{ this.carList() }
					</tbody>
				</Table>
			</body>
		)
	}
}
