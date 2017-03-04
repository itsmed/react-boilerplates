import React, { Component } from 'react';

import './authorization.scss';

class Authorization extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSignUp(this.refs.username.value);
  }

  render() {
    return <div ref="auth-container">
      <div id="modal-background"></div>
      <form onSubmit={ this.handleSubmit.bind(this) } className="auth-modal">
        <input type="text" placeholder="User Name" ref="username" className="modal-ele modal-input" />
        <input type="password" placeholder="Password" ref="userpw" className="modal-ele modal-input" />
        <button className="modal-ele">{ this.props.message }</button>
      </form>
    </div>;
  }
}

export default Authorization;
