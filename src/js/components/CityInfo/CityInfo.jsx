import React from 'react';

class CityInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card mb-3'>
                <div className='card-header alert-primary'>City Information</div>
                <div className='card-body'>
                    <div className='container' id="city-info">
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>
                                <h2 className='h2 strong'>Tokyo</h2>
                                <p id="lat-lon" className="">Lat/Long: 35.69,139.96</p>
                            </div>
                        </div>
                        <hr style={{ borderTop: "1px solid light-gray" }} />
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Temperature (F)</h6>
                                <p className="text-success font-weight-bold">65.62F</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p className="text-success font-weight-bold">997</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Humidity</h6>
                                <p className="text-success font-weight-bold">39%</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Lowest Temp (F)</h6>
                                <p className="text-success font-weight-bold">62.01F</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Highest Temp (F)</h6>
                                <p className="text-success font-weight-bold">71.01F</p>
                            </div>
                            <div className='col-4 text-center'>
                                <h6 className='h6 strong'>Wind Speed</h6>
                                <p className="text-success font-weight-bold">24.16mph</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CityInfo;
