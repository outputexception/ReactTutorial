import React, { PropTypes } from 'react';
import Prompt from '../components/Prompt';

class PromptContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleUpdateUser(e){
    this.setState({username: e.target.value});
  };

  handleSubmitUser(e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.PlayerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          PlayerOne: this.props.routeParams.PlayerOne,
          PlayerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/PlayerTwo/' + this.state.username);
    }
  };
  render() {
      return(
        <Prompt
          onSubmitUser={this.handleSubmitUser.bind(this)}
          onUpdateUser={this.handleUpdateUser.bind(this)}
          header={this.props.route.header}
          username={this.state.username}
          />
      )
  };
};

module.exports = PromptContainer;
