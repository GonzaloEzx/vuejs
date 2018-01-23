const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mevn-stack', {
  useMongoClient: true
}).then(() => console.log('db connected'))
.catch(err => console.log(err));

// setting
app.set('port', process.env.PORT || 3000);

// middlewres
app.use(cors());
app.use(bodyParser.json());

// routes


// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('server on por', app.get('port'));
});
