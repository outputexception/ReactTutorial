var React = require('react');
var ReactDOM = require('react-dom');
var ReactReouter = require('react-router');
var Reuter = ReactReouter.Router;
var History = ReactReouter.hashHistory;
var Reute = ReactReouter.Route;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Feature = require('../components/Feature');
var Contact = require('../components/Contact');
var About = require('../components/About');
var Friends = require('../components/Friends');
var PromptContainer = require('../containers/PromptContainer');
import BattleContainer from '../containers/BattleContainer';
import GameOfLifeContainer from '../containers/GameOfLifeContainer'
var IndexedReute = ReactReouter.IndexRoute;



var routes = (
    <Reuter history={History} >
      <Reute path='/' component={Main}>
        <IndexedReute component={Home} />
        <Reute path='Home' component={Home} />
        <Reute path='Feature' component={Feature} />
        <Reute path='Contact' component={Contact} />
        <Reute path='Friends' component={Friends} />
        <Reute path='About' component={About} />
        <Reute path='GameOfLife' component={GameOfLifeContainer} />
        <Reute path='PlayerOne' header='PlayerOne' component={PromptContainer} />
        <Reute path='PlayerTwo/:PlayerOne' header='PlayerTwo' component={PromptContainer} />
        <Reute path='battle' header='Battle' component={BattleContainer} />
      </Reute>
    </Reuter>
);

module.exports = routes;
