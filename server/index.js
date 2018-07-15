var express = require('express');
var bodyParser = require('body-parser');
var cal = require('../database-mongo');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.get("/cal", function (req, res) {
  cal.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('this is my data in server get ', data)
      res.json(data)
    }
  });

});


app.post("/cal", function(req,res) {

  console.log('immmmm hereeee ', req.body)
  cal.save(req.body);
  res.end('testing');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
