import React, { Component } from 'react';

export class Form extends Component {
  state = { name: '', tag: '', experience: 'junior', license: false };

  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.target.checked });
  };

  resetForm = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelChange}
          />
        </label>
        <label>
          Nickname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handelChange}
          />
        </label>
        <p>Your Developer level</p>
        <label>
          <input
            type="radio"
            name="experience"
            id=""
            value="junior"
            onChange={this.handelChange}
            checked={this.state.experience === 'junior'}
          />{' '}
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            id=""
            value="middle"
            onChange={this.handelChange}
            checked={this.state.experience === 'middle'}
          />{' '}
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            id=""
            value="senior"
            onChange={this.handelChange}
            checked={this.state.experience === 'senior'}
          />{' '}
          Senior
        </label>

        <label>
          <input
            type="checkbox"
            name="license"
            id=""
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />{' '}
          Agreement
        </label>

        <button type="submit" disabled={!this.state.license}>
          Send
        </button>
      </form>
    );
  }
}
