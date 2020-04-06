import React from 'react';
import './App.css';


export default class Previewer extends React.Component {
  render() {
    return (
      <div className="previewer">
        <div>previewer</div>
        <p className="output">
          {this.props.output}
        </p>
      </div>
    )
  }
}