var React = require('react');
var PropTypes = React.PropTypes;

var ShowList = React.createClass({
  propTypes:{
    names: PropTypes.array.isRequired
  },
  render: function() {
    var listItems = this.props.names.map(function(friend){
      return <li key={friend}> {friend} </li>
    });
    return (
      <div>
        <h3>Friends:</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }

});

module.exports = ShowList;
