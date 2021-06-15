import React from 'react';
import Cards from "../Components/Cards"; import Chart from "../Components/Chart"; import CountryPicker from "../Components/CountryPicker";
import "./App.css";
import { fetchData } from "../Api";

class App extends React.Component {

  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    // this.state.country = country;
  }

  render() {

    const {data, country} = this.state;

    return (
      <div className="app___container">
        <img className="app__logo" src="/logo.webp" alt="" />
        <h1>Covid Stats Tracker</h1>
        <Cards data={data}></Cards>
        <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
