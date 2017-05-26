import express from 'express';
import mongoose from 'mongoose';
import MovieRouter from './routes/MovieRouter';
import bodyParser from 'body-parser';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(bodyParser.json());

app.use(MovieRouter);

// Take care of CORS issues
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// What to do when there's an error
// eslint-disable-next-line
app.use((error, request, response, next) => {
  return response.status(500).send('Uh oh, something went wrong! ' + error);
});

const PORT = 3001;

app.listen(PORT, error => {
  if (error) {
    return console.log('Error listening! ', error);
  }

  return console.log('Listening on http://localhost:' + PORT);
});
