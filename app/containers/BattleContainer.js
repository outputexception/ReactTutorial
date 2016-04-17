import React, {PropTypes} from 'react';
import Battle from '../components/Battle';
import gitHubUtil from '../util/github';


class BattleContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      playersInfo: []
    }
  }

  static contextTypes= {
    router: PropTypes.object.isRequired
  };

  componentWillMount(){
    console.log('Will Mount');
    this.setState({
      playersInfo: [this.props.location.query.PlayerOne, this.props.location.query.PlayerTwo],
      isLoading: true
    });
  }

  componentWillReceiveProps(propsy){
    console.log('Will Recive Props');
    console.log(propsy);
  }

  componentWillUnmount(){
    console.log('Will Unmount');
  }

  componentDidMount(){
    console.log('Did Mount');
    // this.setState({
    //   players: this.props.location.query,
    //   isLoading: true
    // });
    console.log(this.state.playersInfo);
    gitHubUtil.getPlayersInfo(this.state.playersInfo)
      .then(function(players){
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this));
  }

  render() {
    return (
      <Battle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        />
    );
  }

};

module.exports = BattleContainer;
