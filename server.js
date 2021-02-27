var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const fs = require('file-system')

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.post('/express_backend', (req, res) => {
  // const data = req.body ;
  const qtag = req.body.message
  console.log(qtag[0])
  if(qtag[0] == "q" || qtag[0] == "-"){
    fs.appendFile("./question_logs/"+req.body.username,req.body.time + " | " + req.body.message,(err)=>{console.log(err)});
  }
  else{
    fs.appendFile("./logs/"+req.body.username,req.body.time + " | " + req.body.message,(err)=>{console.log(err)});
  }
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});