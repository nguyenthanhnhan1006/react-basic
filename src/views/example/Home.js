import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }
  // HOC: higher order components
  render() {
    console.log(" >>>>> checkprops", this.props);
    return (
      <div>
        <h1>Welcome to Home Page</h1>
        <p>This is the home page</p>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
