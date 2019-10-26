import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { city, temp, pressure, humidity, lowestTemp, highestTemp, windSpeed, lat, lon } = this.props;
        return (
            <div className='card mb-3'>
                <div className='card-header alert-primary'>City Information</div>
                <div className='card-body'>
                    <div className='container' id="city-info">
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>
                                <h2 className='h2 strong'>{city}</h2>
                                <p id="lat-lon" className="">Lat/Long: {lat}, {lon}</p>
                            </div>
                        </div>
                        <hr style={{ borderTop: "1px solid light-gray" }} />
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Temperature (F)</h6>
                                <p className="text-success font-weight-bold">{temp}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p className="text-success font-weight-bold">{pressure}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Humidity</h6>
                                <p className="text-success font-weight-bold">{humidity}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Lowest Temp (F)</h6>
                                <p className="text-success font-weight-bold">{lowestTemp}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Highest Temp (F)</h6>
                                <p className="text-success font-weight-bold">{highestTemp}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Wind Speed</h6>
                                <p className="text-success font-weight-bold">{windSpeed}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
