var React = require('react');
var PropTypes = React.PropTypes;

var ShowList = require('../components/ShowList');

var Friends = React.createClass({
  render: function() {
    var name = 'Tomasz';
    var friends = ['Iza', 'Michal', 'Test'];
    return (
      <div>
        <h3> Name: {name}</h3>
        <ShowList names={friends} />
      </div>
    );
  }

});

module.exports = Friends;
