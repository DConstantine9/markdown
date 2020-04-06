import React from 'react';
import './App.css';
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')
 
 

export default class Previewer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="previewer">

        <div>previewer</div>
        <p className="output">
        <ReactMarkdown source={this.props.output} /> 
        </p>
      </div>
    )
  }
}