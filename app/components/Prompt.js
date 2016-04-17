// var React = require('react');
// var PropTypes = React.PropTypes;
// var transparentBg = require('../styles').transparentBg;

import React, {PropTypes} from 'react';
import transparentBg from '../styles';

const Prompt = (props) => {
  return (
    <div className="jumbotron col-sm-8 col-sm-offset-2 text-center" style={transparentBg} >
      <h1>{props.header}</h1>
      <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
                <input
                  className="form-group"
                  placeholder="Placeholder"
                  onChange={props.onUpdateUser}
                  value={props.username}
                  type="text"
                  />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-success btn-block"
                type="submit">
                Continue
              </button>
            </div>
          </form>
      </div>

    </div>
  );
};

Prompt.propTypes ={
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired
}

module.exports = Prompt;
