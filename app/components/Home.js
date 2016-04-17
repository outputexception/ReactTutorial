// var React = require('react');
// var transparentBg = require('../styles').transparentBg;
//
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link;

import React from 'react';
import {ReactRouter, Link} from 'react-router';
import transparentBg from '../styles';

// var Home = React.createClass({
class Home extends React.Component{
  render() {
    return (
      // <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <div className="jumbotron col-sm-8 col-sm-offset-2 text-center" style={transparentBg} >
        <h1>Github Battle</h1>
        <p className="lead">Fancy mottto</p>
        <Link to='/PlayerOne'>
          <button type='button' className='btn btn-success btn-lg'>
            GetStarted
          </button>
        </Link>
      </div>
    );
  }

};

module.exports = Home;
