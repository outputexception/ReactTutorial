import React, { PropTypes } from 'react';
import GameOfLife from '../components/GameOfLife';

class GameOfLifeContainer extends React.Component {

  static fps;
  static width;
  static height;
  static radius;
  static boardReference;
  static context2d;
  static board;
  static temp_board;

  constructor(props){
    super(props);

    this.init();

    this.createLife(this.width, this.height, this.radius);
  };

  init(){
    this.fps = 100;
    this.width = 50;
    this.height = 50;
    this.radius = 4;
  };



  drawSubject(x, y, r, color){
    x = (x + 1 ) * 2 * r - r;
    y = (y + 1 ) * 2 * r - r;
    this.context2d.beginPath();
    this.context2d.fillStyle = color;
    this.context2d.arc(x, y, r, 0, 2*Math.PI);

    this.context2d.fill();
  }

  drawBoard(){
    for(let x = 0; x < this.board.length; x++)
      for(let y = 0; y < this.board[x].length; y++)
        // console.log(this.board[x][y]);
        if(this.board[x][y] == true)
          this.drawSubject(x, y, this.radius, '#000');
        else
          this.drawSubject(x, y, this.radius, '#FFF');

  }

  printBoard(){
    this.board.forEach(t => t.forEach(e => console.log(e)));
  }

  createLife(x, y, ratio){
    this.board = new Array(x);
    for(let a = 0; a < x; a++){
      this.board[a] = new Array(y);
      for(let b = 0; b < y; b++)
        this.board[a][b] = new Boolean(Math.floor(Math.random() * 2));
      }
  }

  startEngine(){
    setInterval(function(){
      this.playGod();
      // this.drawBoard();
    }.bind(this), this.fps);
  };

  playGod(){
    for(let x = 0; x < this.board.length; x++)
      for(let y = 0; y < this.board[0].length; y++)
        if(this.board[x][y] == true){
          if(!this.isAlpha(x, y)){
            this.killUnit(x, y);
          } else {
            this.drawSubject(x, y, this.radius, 'black')
          }
        } else {
            this.hasSecondChance(x, y);
        }
        // this.cleanCanva();
  }

  getNumberOfUnits(x, y){
    let result = 0;
    let min_x = x == 0 ? x : x -1;
    let max_x = x == (this.board.length - 1) ? x : x + 1;
    let min_y = y == 0 ? y : y - 1;
    let max_y = y == (this.board[0].length - 1) ? y : y +1;



    for( let a = min_x ; a <= max_x; a++)
      for( let b = min_y; b <= max_y; b ++){
        if(a == x && b == y) continue;
        if(this.board[a][b] == true) result++;
      }
    return result;
  }

  isAlpha(x, y){
    let units = this.getNumberOfUnits(x, y);
    return units == 2 || units == 3
  };

  isBeta(x, y){
    let result = false;
    let units = this.getNumberOfUnits(x, y);
    if(units < 2 || units > 3){
      result = this.killUnit(x, y);
    }
    return result;
  };

  hasSecondChance(x, y){
      let result = false;
      if(this.getNumberOfUnits(x, y) == 3){
        this.board[x][y] = true;
        this.drawSubject(x, y, this.radius, 'green');
        result = true;
      };
      return result;
  };

  killUnit(x, y) {
    this.drawSubject(x, y, this.radius, 'white');
    this.board[x][y] = false;
    return true;
  }

  terminateLife(){
    for (let i = 0; i < this.board.length; i++) {
      delete(this.board[i]);
    }
    delete(this.board);
  }

  cleanCanva(){
    this.context2d.beginPath();
    this.context2d.fillStyle = 'white';
    this.context2d.fillRect(0, 0, 1920, 1280);
  }

  componentDidMount(){
    this.boardReference = document.getElementById('board');
    this.context2d = this.boardReference.getContext('2d');

    this.drawBoard();
    this.startEngine();
  }

  render () {
    return (
      <GameOfLife
          id='board'

          />
    )
  }
}

export default GameOfLifeContainer
