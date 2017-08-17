import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import axios from 'axios';


class Header extends Component {

  constructor() {
    super(...arguments);
  }

  login = () => {
    browserHistory.push('/login');
  };

  register = () => {
    browserHistory.push('/register');
  };

  logout = () => {
    const context = this;
  };

  render() {

  }

}