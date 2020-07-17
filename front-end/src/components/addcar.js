import React, { Component } from 'react';
import axios from 'axios';

export default class AddCar extends Component {
    constructor(props) {
        super(props);
        this.setCarid = this.setCarid.bind(this);
        this.setMake = this.setMake.bind(this);
        this.setModel = this.setModel.bind(this);
        this.setColor = this.setColor.bind(this);
        this.setOwner = this.setOwner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            carid: '',
            make: '',
            model: '',
            color: '',
            owner: ''
        }
    }

    setCarid(e) {
        this.setState({
            carid: e.target.value
        })
    }

    setMake(e) {
        this.setState({
            make: e.target.value
        })
    }

    setModel(e) {
        this.setState({
            model: e.target.value
        })
    }

    setColor(e) {
        this.setState({
            color: e.target.value
        })
    }

    setOwner(e) {
        this.setState({
            owner: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const newcar = {
            carid: this.state.carid,
            make: this.state.make,
            model: this.state.model,
            color: this.state.color,
            owner: this.state.owner,
        }

        axios.post('http://localhost:8080/api/addcar', newcar)
        window.location = '/addcar';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Car ID: </label>
                        <input type="text"
                            required
                            className="form-control"
							placeholder="CAR12"
                            value={this.state.carid}
                            onChange={this.setCarid}
                            />
                    </div>
                    <div className="form-group">
                        <label>Make: </label>
                        <input type="text"
                            required
                            className="form-control"
							placeholder="Honda"
                            value={this.state.make}
                            onChange={this.setMake}
                            />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input type="text"
                            required
                            className="form-control"
							placeholder="Accord"
                            value={this.state.model}
                            onChange={this.setModel}
                            />
                    </div>
                    <div className="form-group">
                        <label>Color: </label>
                        <input type="text"
                            required
                            className="form-control"
							placeholder="Black"
                            value={this.state.color}
                            onChange={this.setColor}
                            />
                    </div>
                    <div className="form-group">
                        <label>Owner: </label>
                        <input type="text"
                            required
                            className="form-control"
							placeholder="Tom"
                            value={this.state.owner}
                            onChange={this.setOwner}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add New Car" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
