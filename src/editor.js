import React from 'react';
import './App.css';

export default class Editor extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="editor">
        <div className="header">editor</div>
        <textarea 
          onChange={this.props.updateData}
          defaultValue={this.props.output}
          type="text"
        ></textarea>
      </div>
    )
  }
}