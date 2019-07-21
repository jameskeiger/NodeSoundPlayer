const http = require('http');
const player = require('play-sound')(opts = {})

const app = http.createServer((request, response) => {
  console.log('Request received, playing.');
  console.log(request);
  player.play('file.mp3', function(err) { console.error(err); }); 
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('ok');
  response.end();
});

app.listen(3000);
console.log('Listening on port 3000...');
