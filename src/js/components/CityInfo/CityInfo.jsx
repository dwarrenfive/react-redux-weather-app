import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { city, temp, pressure, humidity, lowestTemp, highestTemp, windSpeed, lat, lon, icon } = this.props;
        console.log(this.props)
        return (
            <div className='card mb-3'>
                <div className='card-header alert-primary'>City Information</div>
                <div className='card-body'>
                    <div className='container' id="city-info">
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>
                                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                                <h2 className='h2 strong'>{city == 0 ? 'Weather App' : city}</h2>
                                <p id="lat-lon" className="">Lat/Long: {lat == 0 ? '0' : lat}, {lat == 0 ? '0' : lon}</p>
                            </div>
                        </div>
                        <hr style={{ borderTop: "1px solid light-gray" }} />
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Temperature (F)</h6>
                                <p className="text-success font-weight-bold">{temp == 0 ? '0' : temp}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p className="text-success font-weight-bold">{pressure == 0 ? '0' : pressure}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Humidity</h6>
                                <p className="text-success font-weight-bold">{humidity == 0 ? '0' : humidity}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Lowest Temp (F)</h6>
                                <p className="text-success font-weight-bold">{lowestTemp == 0 ? '0' : lowestTemp}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Highest Temp (F)</h6>
                                <p className="text-success font-weight-bold">{highestTemp == 0 ? '0' : highestTemp}</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Wind Speed</h6>
                                <p className="text-success font-weight-bold">{windSpeed == 0 ? '0' : windSpeed}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
