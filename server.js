// [START gae_node_request_example]
const express = require('express');

const app = express();
const fs = require('fs');



const phonic_o = fs.readFileSync('phonic_ex.json');
const personObject = JSON.parse(phonic_o);


app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('server', {  name: "Phonic",  items: personObject  })
                               });
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;

