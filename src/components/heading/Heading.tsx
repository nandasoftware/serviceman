import React, { Component } from 'react';

export class Heading extends Component {
  render() {
    return(
      <h1>Hello, {this.props.name}</h1>
    )
  }
}