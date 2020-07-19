import React, { Component } from "react";
import { Columns } from "../Rows";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      sort: "asc",
    };
  }

  sortById = () => {
    if (this.state.sort === "asc") {
      const sorted = this.state.users.sort((a, b) => a.id - b.id);
      this.setState({
        users: sorted,
        sort: "desc",
      });
    } else {
      const sorted = this.state.users.sort((a, b) => {
        return b.id - a.id;
      });
      this.setState({
        users: sorted,
        sort: "asc",
      });
    }
  };

  sortBy = (key) => {
    if (this.state.sort === "asc") {
      const sorted = this.state.users.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        return 0;
      });
      this.setState({
        users: sorted,
        sort: "desc",
      });
    } else {
      const sorted = this.state.users.sort((a, b) => {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
      this.setState({
        users: sorted,
        sort: "asc",
      });
    }
  };

  render() {
    return (
      <div>
        <h1 id="title">Table</h1>
        <table id="students">
          <thead>
            <tr>
              <th onClick={() => this.sortById()}>Id</th>
              <th onClick={() => this.sortBy("name")}>Name</th>
              <th onClick={() => this.sortBy("country")}>Country</th>
              <th onClick={() => this.sortBy("email")}>Email</th>
            </tr>
          </thead>
          <tbody>{Columns(this.state.users)}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
