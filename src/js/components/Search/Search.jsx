import React from 'react';
import {
    getWeather,
    getCity
} from './searchAction';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleCity = this.handleCity.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    handleCity(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(getCity(value));
    }

    handleClick(event) {
        event.preventDefault()
        const { dispatch, city } = this.props;
        const { value } = event.target;
        dispatch(getWeather(value || city));
    }

    _handleKeyPress(event) {
        const { dispatch, city } = this.props;
        const { value } = event.target;
        if (event.key === 'Enter') {
            return dispatch(getWeather(value || city));
        }
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <div className="btn-group btn-group" role="group">
                    <button type="button" value="san diego" onClick={this.handleClick} className="btn btn-info">San Diego</button>
                    <button type="button" value="new york" onClick={this.handleClick} className="btn btn-info">New York</button>
                    <button type="button" value="tokyo" onClick={this.handleClick} className="btn btn-info">Tokyo</button>
                    <button type="button" value="fresno" onClick={this.handleClick} className="btn btn-info">Fresno</button>
                    <button type="button" value="london" onClick={this.handleClick} className="btn btn-info">London</button>
                </div>
                <div className='form-group'>
                    <div className="input-group">
                        <input type="text" value={city} onChange={this.handleCity} className="form-control"
                            onKeyPress={this._handleKeyPress} placeholder="Enter city i.e., San Diego" />
                        <span onClick={this.handleClick} id='enter' className='btn input-group-addon'>Go!</span>
                    </div>
                </div>
            </div>
        )
    }
}
