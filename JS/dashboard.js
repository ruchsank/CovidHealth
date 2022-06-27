class CountryCard extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      if (this.props.currentCountry == null || this.props.currentCountry.length === 0) {
        return /*#__PURE__*/React.createElement("div", null, "Loading...");
      } else {
        let dateTime = new Date(this.props.currentCountry.updated);
        let displayDateTime = dateTime.toLocaleString("en-GB");
        return /*#__PURE__*/(
          React.createElement("div", { id: "country-card" }, /*#__PURE__*/
          React.createElement("div", { className: "top-wrap" }, /*#__PURE__*/
          React.createElement("div", { className: "country-flag" }, /*#__PURE__*/
          React.createElement("img", {
            src: this.props.currentCountry.countryInfo.flag,
            alt: this.props.currentCountry.country })), /*#__PURE__*/
  
  
          React.createElement("div", { className: "top-details-wrap" }, /*#__PURE__*/
          React.createElement("div", { className: "country" },
          this.props.currentCountry.country, " "), /*#__PURE__*/
  
          React.createElement("div", { className: "continent" }, /*#__PURE__*/
          React.createElement("span", { className: "main-title" }, "Continent"),
          this.props.currentCountry.continent, " "), /*#__PURE__*/
  
          React.createElement("div", { className: "population" }, /*#__PURE__*/
          React.createElement("span", { className: "main-title" }, "population"),
          this.props.currentCountry.population.
          toString().
          replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")), /*#__PURE__*/
  
          React.createElement("div", { className: "last-updated" }, /*#__PURE__*/
          React.createElement("span", { className: "main-title" }, "updated at"),
          displayDateTime))), /*#__PURE__*/
  
  
  
          React.createElement("div", { className: "bottom-wrap" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box active" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Total Active"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.active)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box active per_million" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Active per million"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.activePerOneMillion)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box cases" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Total Cases"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.cases)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box cases per_million" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Cases per million"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.casesPerOneMillion)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box critical" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Critical Condition"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.critical)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box critical per_million" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Critical per million"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.criticalPerOneMillion)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box deaths" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Total Deaths"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.deaths)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box deaths per_million" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Deaths per million"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.deathsPerOneMillion)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box recovered" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Total Recovered"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.recovered)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box recovered per_million" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Recovered per million"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.recoveredPerOneMillion)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box tests" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Total Tests"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.tests)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box tests per_million" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Tests per million"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.testsPerOneMillion)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box cases_today" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Cases today"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.todayCases)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box deaths_today" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Deaths today"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.todayDeaths)), /*#__PURE__*/
  
  
          React.createElement("div", { className: "info-box recovered_today" }, /*#__PURE__*/
          React.createElement("div", { className: "info-box-title" }, "Recovered today"), /*#__PURE__*/
          React.createElement("div", { className: "info-box-stat" },
          this.props.currentCountry.todayRecovered)))));
  
  
  
  
  
      }
    }}
  
  class CountryList extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      if (this.props.countriesData == null || this.props.countriesData.length === 0) {
        return /*#__PURE__*/React.createElement("div", null, "Loading...");
      } else {
        return /*#__PURE__*/(
          React.createElement("table", { id: "countries_table" }, /*#__PURE__*/
          React.createElement("thead", null, /*#__PURE__*/
          React.createElement("tr", null, /*#__PURE__*/
          React.createElement("th", null, "Country"), /*#__PURE__*/
          React.createElement("th", null, "Total Cases"), /*#__PURE__*/
          React.createElement("th", null, "Cases Today"), /*#__PURE__*/
          React.createElement("th", null, "Deaths"), /*#__PURE__*/
          React.createElement("th", null, "Deaths Today"), /*#__PURE__*/
          React.createElement("th", null, "Recovered"), /*#__PURE__*/
          React.createElement("th", null, "Recovered Today"), /*#__PURE__*/
          React.createElement("th", null, "Active"), /*#__PURE__*/
          React.createElement("th", null, "Critical"))), /*#__PURE__*/
  
  
          React.createElement("tbody", null,
          this.props.countriesData.map((elem) => /*#__PURE__*/
          React.createElement("tr", { className: "country_row" }, /*#__PURE__*/
          React.createElement("th", {
            className: "country-display",
            onClick: () => this.props.whenClicked(elem) }, /*#__PURE__*/
          React.createElement("img", {
            src: elem.countryInfo.flag,
            alt: elem.country,
            className: "country-img" }),
          elem.country), /*#__PURE__*/
  
          React.createElement("th", null, elem.cases), /*#__PURE__*/
          React.createElement("th", null, elem.todayCases), /*#__PURE__*/
          React.createElement("th", null, elem.deaths), /*#__PURE__*/
          React.createElement("th", null, elem.todayDeaths), /*#__PURE__*/
          React.createElement("th", null, elem.recovered), /*#__PURE__*/
          React.createElement("th", null, elem.todayRecovered), /*#__PURE__*/
          React.createElement("th", null, elem.active), /*#__PURE__*/
          React.createElement("th", null, elem.critical))))));
  
  
  
  
  
      }
    }}
  
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        countriesData: [],
        activeCountry: [] };
  
      this.setActiveCountry = this.setActiveCountry.bind(this);
    }
    componentDidMount() {
        axios.
        get("https://disease.sh/v3/covid-19/countries").
        then(response => {
          this.setState({ countriesData: response.data });
          this.getDefaultCountry();
        }).
        catch(error => console.log(error));
      }
    
      getDefaultCountry() {
        for (let i = 0; i < this.state.countriesData.length; i++) {
          if (this.state.countriesData[i].country == "India") {
            var getDefaultCountry = this.state.countriesData[i]
            break;
          }
        }
        this.setState({ activeCountry: getDefaultCountry });
      }
  
    setActiveCountry(country) {
      this.setState({ activeCountry: country });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  
    render() {
      return /*#__PURE__*/(
        React.createElement("div", { className: "covid-tracker" }, /*#__PURE__*/
        React.createElement("h1", { className: "section-title" }, "Country Card"), /*#__PURE__*/
        React.createElement("p", { className: "section-instructions" }, "Random country has been displayed as an example, view instructions below to display specific country of your choice."), /*#__PURE__*/
  
  
  
        React.createElement(CountryCard, { currentCountry: this.state.activeCountry }), /*#__PURE__*/
  
        React.createElement("h1", { className: "section-title" }, "Country List"), /*#__PURE__*/
        React.createElement("p", { className: "section-instructions" }, "Click on the specific country name to view all the details about the country."), /*#__PURE__*/
  
  
  
        React.createElement(CountryList, {
          countriesData: this.state.countriesData,
          whenClicked: this.setActiveCountry })));
  
  
  
    }}
  
  
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));