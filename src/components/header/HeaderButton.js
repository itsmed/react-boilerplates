import React, { Component } from 'react';

import './header.scss';

class HeaderButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.buttonAction();
  }

  render() {
    return <div>
      <button className="header-button" onClick={ this.handleClick.bind(this) }>{ this.props.text }</button>
    </div>;
  }
};

const { string, func } = React.PropTypes;

HeaderButton.propTypes = {
  text: string,
  buttonAction: func
};

export default HeaderButton;
