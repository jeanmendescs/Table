import React from "react";
import Papa from "papaparse";
import data from "./data.csv";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    // read the csv file
    fetch(data)
      .then((file) => file.text())
      .then((text) => {
        const papaCSV = Papa.parse(text);

        //remove first and last elements (trash data)
        papaCSV.data.shift();
        papaCSV.data.pop();

        //convert array to object
        const formatedData = papaCSV.data.map(([id, name, country, email]) => ({
          id,
          name,
          country,
          email,
        }));
        this.setState({ users: formatedData });
      });
  }

  render() {
    if (Array.isArray(this.state.users) && this.state.users.length) {
      return <Table users={this.state.users} />;
    }
    return null;
  }
}

export default App;
