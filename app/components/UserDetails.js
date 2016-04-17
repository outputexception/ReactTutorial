import React, { PropTypes } from 'react'

const UserDetails = (props) => {
  return (
    <div className="col-sm-6">
      <p>Player: {props.data.login}</p>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="row"><img src={props.data.avatar_url} /></div>
        <div className="row">Login: {props.data.login}</div>
        <div className="row">Id: {props.data.id}</div>
        <div className="row">Avatar{props.data.avatar_url}</div>
      </div>
    </div>
  )
}

export default UserDetails
