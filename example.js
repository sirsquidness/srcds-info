var srcds = require('./main.js');



// If the example isn't working, it might just be that the server it's trying to query is down. You can cross check that here: 
// http://www.gametracker.com/server_info/203.217.24.85:27017/
// If it is down, find one that isn't and change the IP and port accordingly
var client = srcds("27.50.71.3", 21035);


client.info(function(err, res) {
	if (err) console.error(err);
	console.log("Queried server at " + res.ip + ":" + res.port
		+ ". Its name is '" + res.serverName + "' and it has "
		+ res.numPlayers + " people currently playing.");
});
