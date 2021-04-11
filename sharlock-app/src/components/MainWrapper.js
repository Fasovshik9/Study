import React, { Component } from 'react';

class MainWrapper extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <p>{this.props.text}</p>
        <nav></nav>
      </div>
    )
  };
}

export default MainWrapper;