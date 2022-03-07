import React from 'react';
import { weatherApiKey } from '../keys/weather_api_key';

class Weather extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {weatherData: null}
  }
  
  componentDidMount() {

    function success(pos) {
      var crd = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      console.log(weatherApiKey);
      // fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${weatherApiKey}&units={imperial}`)
      //   .then(({body}) => {
      //     this.setState({ weatherData })
      //   })
      //   .catch((error) => console.error(error))
    }

    navigator.geolocation.getCurrentPosition(success) 


  }

  render() {
    const {name, temperature} =this.state.weatherData
    
    return (
      <div>
        <div>{name ? name : ''}</div>
        <div>{temperature.value ? temperature.value : ''}</div>

      </div>
    )
  }
}

export default Weather;