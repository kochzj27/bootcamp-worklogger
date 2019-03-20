import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: 'personal',
      description: '',
      minutes: '0',
      descError: true,
    }
  }

  //updateValue will take the onChange value from the inputs and update state--followed by a call to validate
  updateValue = (props) => {
    this.setState({
      [props.target.name]: props.target.value,
    }, () => this.validateForm())
  }

  validateForm = (props) => {
    let min = this.state.minutes;
    let descError = this.state.descError;

    if (this.state.description.length < 5) {
      descError = true;
      document.getElementById('description').classList.add('is-invalid'); //adds bootstrap error class
    } else {
      descError = false;
      document.getElementById('description').classList.remove('is-invalid'); //removes bootstrap error class
    }

    //validate the minutes, return max/mins if outside of range
    if (this.state.minutes < 0) {
      min = 0;
    } else if (this.state.minutes > 240) {
      min = 240;
    }
    this.setState({
      minutes: min,
      descError
    });

  }


  //submit form will pass the entire state of this component upwards to the Container component
  submitForm = (e) => {
    e.preventDefault(); //prevent default submit of the form

    this.props.addItem(this.state); // pass back function


    document.getElementById('description').value = ''; //visual and state value reset
    document.getElementById('minutes').value = '0';
    this.setState({
      minutes: 0,
      description: '',
      descError: true,
    });
  }


  render() {
    return (
      <div className="form">
        <form onSubmit={this.submitForm}>
          <div className='form-group'>
            <label htmlFor='project' className='lab'>Project</label>
            <select id='project' name='project' className='form-control' onChange={this.updateValue}>
              <option value='personal'>Personal</option>
              <option value='work'>Work</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description' className='lab error'>Description</label>
            <input type='text' id='description' name='description' className='form-control' onChange={this.updateValue} />
          </div>
          <div className='form-group'>
            <label htmlFor='minutes' className='lab'>Minutes</label>
            <input type='number' id='minutes' name='minutes' className='form-control minutes' onChange={this.updateValue} min='0' max='240' defaultValue='0' />
          </div>
          <input type='submit' className='btn btn-primary lab' value="Add" disabled={this.state.descError} />
        </form>
      </div>
    );
  }
}

export default Form;
