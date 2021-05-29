const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require('body-parser');

require('dotenv/config')

//import routes 
const postsRoute = require('./routes/posts');


app.use(bodyParser.json()); 

app.use('/posts', postsRoute);

//Routes
app.get('/', ((req,res) => {
  res.send('We are on the home page')
}))


//connect to db
mongoose.connect('process.env.DB_CONNECTION', 
{ useNewUrlParser: true },
() => console.log('connected to db!'))

//how do we listen to the server
app.listen(3008)