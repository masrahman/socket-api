var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost', { useNewUrlParser: true });

var db = mongoose.connection;
let apiRoutes = require("./api-routes");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/messages', (req, res) => {
    io.emit('maasrahman', req.body);
    console.log(req.body);
    res.send('<h1>Sukses</h1>');
});

app.post('/messages/spesifik', (req, res) => {
    io.to(req.body.session).emit('maasrahman', req.body);
    res.send('<h1>Sukses</h1>');
});

app.use('/api', apiRoutes);

io.on('connection', function(socket){
  console.log('a user connected');
  console.log(socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
