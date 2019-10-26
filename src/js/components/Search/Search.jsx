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
    }

    handleCity(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(getCity(value));
    }

    handleClick(event) {
        event.preventDefault()
        const { dispatch, city } = this.props;
        dispatch(getWeather(city));
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <div className="btn-group btn-group" role="group">
                    <button type="button" className="btn btn-info">San Diego</button>
                    <button type="button" className="btn btn-info">New York</button>
                    <button type="button" className="btn btn-info">Tokyo</button>
                    <button type="button" className="btn btn-info">Washington D.C.</button>
                    <button type="button" className="btn btn-info">London</button>
                </div>
                <form>
                    <div className='form-group'>
                        <div className="input-group">
                            <input type="text" value={city} onChange={this.handleCity} className="form-control" placeholder="San Diego" />
                            <span onClick={this.handleClick} className='btn input-group-addon'>Go!</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
