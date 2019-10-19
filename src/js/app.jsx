import React from 'react';
import CityInfo from './components/CityInfo/CityInfo';
import Search from './components/Search/Search';
import SearchHistory from './components/SearchHistory/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className="m-5">
        <div className='jumbotron' >
          <h1 className='display-3'>Weather App</h1>
          <p className='mt-3'>Always know if you'll nedd an umbrella!</p>
        </div>
        <div >
          <Search />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfo />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
