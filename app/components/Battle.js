import  React, {PropTypes } from 'react'
import UserDetails from './UserDetails';

function loading(isLoaded){
  
  return isLoaded ? ({opacity: 0.66},{background: '#666'}) : {};
};

const Battle = (props) => {
  console.log('Render');
  return (
    <div
      className="col-sm-12 jumbotron text-center"
      style={loading(props.isLoading)}>
        <h3>{props.isLoading?"Loading" : "Content Loaded"}</h3>
        <UserDetails
          data = {props.playersInfo[0]}
        />
        <UserDetails
          data = {props.playersInfo[1]}
        />
    </div>
  )
}

Battle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired
};


export default Battle;
