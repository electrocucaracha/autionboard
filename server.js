var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Auction Online Dashboard'
  });
});

auctioneer_count=0
io.on('connection', (client) => {
  client.on('join', (auctioneer) => {
    console.log(auctioneer.id + ' - auctioneer joined');
    auctioneer_count++;

    setInterval(function() {
      return client.emit('count', {
        count: auctioneer_count
      });
    }, 100);
  });
});

server.listen(3000, function () {
  console.log("Auction Dashboard server listening on port %d", this.address().port);
});

module.exports = app
