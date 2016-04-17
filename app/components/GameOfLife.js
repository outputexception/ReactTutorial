import React, { PropTypes } from 'react';
import transparentBg from '../styles';

const GameOfLife = (props) => {
  return (
    // <div style="widht: '100%'; height: '100vh'; position: 'fixed'; top: '0px'; left:'0px'" >
    <div>
      {/*<canvas id={props.id} width={props.width} height={props.height} />*/}
      <canvas id={props.id} style={{position: 'fixed', height: '100%', width: '100%'}} />

    </div>
  )
}

export default GameOfLife
