import React, { Component } from 'react';
import Form from '../Form/Form';
import WorkDisplay from '../WorkDisplay/WorkDisplay';
import './Container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ type: 'personal', desc: 'Learning React', time: '75' }],
    }
  }

  //add item function will take state from form
  // and create new object, push into items array
  addItem = (e) => {
    let newProj = {
      type: e.project,
      desc: e.description,
      time: e.minutes
    }
    let tempState = Object.assign({}, this.state);
    tempState.items.push(newProj);
    this.setState({
      tempState,
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Work Logger</h1>
        <Form addItem={this.addItem} />
        <hr />
        <WorkDisplay items={this.state.items} />
      </div>
    );
  }
}

export default Container;
