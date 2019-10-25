import React from 'react';
import {
    getWeather,
    // getError
} from './searchAction';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleWeatherData = this.handleWeatherData.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleCity(city) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(getWeather(value))
    }

    handleClick() {
        event.preventDefault()
        const { dispatch, city } = this.props;
        dispatch(getWeather(city))
    }

    render() {
        const { locations } = this.props;
        console.log(locations)
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
                            <input type="text" onChange={this.handleWeatherData} className="form-control" placeholder="San Diego" />
                            <span className='btn input-group-addon'>Go!</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
