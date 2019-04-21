import React, { Component } from React;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  myMethod = () => {
    // Этот метод неявно связан с this
  }
  render() {
    return (
      <>
        <div>
          {this.myMethod()}
        </div>
      </>
    )
  }
};