
const teams = require('./teams')


teams.use('/teams', teams)

teams.set('port', (process.env.PORT || 5000));

teams.listen(teams.get('port'), function() {
    console.log('Node app is running on port', teams.get('port'));
});
