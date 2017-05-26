import MovieModel from '../models/MovieModel';

const MovieController = {};

MovieController.list = (request, response, next) => {
  MovieModel.find({}).exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(error => {
      next('Error retrieving movie list: ' + error);
    });
};

MovieController.show = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
    .then(movies => {
      return response.json(movies);
    })
    .catch(error => {
      next('Error showing movie: ' + error);
    });
};

MovieController.add = (request, response, next) => {
  const newMovie = new MovieModel({
    title: request.body.title,
    posterPath: request.body.posterPath,
    overview: request.body.overview
  });

  newMovie.save()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      next('Error adding movie: ' + error);
    });
};

MovieController.update = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
    .then(movie => {
      movie.title = request.body.title || movie.title;
      movie.posterPath = request.body.posterPath || movie.posterPath;
      movie.overview = request.body.overview || movie.overview;

      return movie.save(); 
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      next('Error updating movie: ' + error);
    });
};

MovieController.remove = (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(error => {
      next('Error removing movie: ' + error);
    });
};

export default MovieController;
