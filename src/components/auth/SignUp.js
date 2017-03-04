import React, { Component } from 'react';

import './signup.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('clicked', this.refs.username.value);
  }

  render() {
    return <div>
      <form onSubmit={ this.handleSubmit.bind(this) } className="auth-modal">
        <input type="text" placeholder="User Name" ref="username" className="modal-ele" />
        <input type="password" placeholder="Password" ref="userpw" className="modal-ele" />
        <button className="modal-ele">Sign Up</button>
      </form>
    </div>;
  }
}

export default SignUp;
