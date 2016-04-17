var React = require('react');
var PropTypes = React.PropTypes;


var Main = React.createClass({
  propTypes: {

  },
  render: function () {
    return (
      <div>
          Message from Main
          {this.props.children}
      </div>
    );
  }

});

module.exports = Main;
