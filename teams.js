const express = require('express');
var teams = express();

var squadre = [
  {
  id: 'id',
	name: 'name',
	is_still_in: true,

  }
];


const uuid = require('uuid/v4');
const bodyParser = require('body-parser');
teams.use(bodyParser.json());

teams.post('/', function(req, res) {
  var newTeams = {
    id: uuid(),
    name: req.body.name,
    is_still_in: req.body.is_still_in,

  };

  squadre.push(newTeams);
  res.sendStatus(200);
});


teams.get('/', function(req, res) {
  res.send(squadre);
});


teams.put('/', function(req, res) {

});





module.exports = teams;
