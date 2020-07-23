import React from "react";
import "./styles.css";

class App extends React.Component {
  state = { showData: false };

  list = [
    {
      title: "React",
      url: "https://facebook.github.io/react/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://github.com/reactjs/redux",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ];

  showData = () => {
    return this.state.showData ? (
      this.list.map(item => <p>{item.title}</p>)
    ) : (
      <p>No Data</p>
    );
  };

  displayData = () => {
    this.setState({ showData: !this.state.showData });
  };

  render() {
    return (
      <div>
        <button onClick={this.displayData}>Click to Show Data</button>
        <ul>{this.showData()}</ul>
      </div>
    );
  }
}

export default App;
