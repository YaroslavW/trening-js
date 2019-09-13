import React, { Component } from React;
export default class App extends Compononent {
  constructor(props) {
  super(props);
  this.state = {};
  }
myMethod = () => {
    // This method is bound implicitly!
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