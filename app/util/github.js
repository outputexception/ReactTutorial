import axios from 'axios';

const id = "";
const secret = ""; // "278b186b963b6607f88b4ce4382d94144246c5a4";

const param = "?client_id=" + id + "&client_secret=" + secret

const user = "outputexception";
const url = "https://api.github.com/users/";

function getUserInfo(username){
  return axios.get(url + username + param)
}


let gitHubUtil = {
  getPlayersInfo: function(players){
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function(users){
      return users.map(function(user){
        console.log('info', user.data);
        return user.data;
      })
    }).catch(function(err) {
      console.warn('Errror: ', err);
    })
  }
};

module.exports = gitHubUtil;
