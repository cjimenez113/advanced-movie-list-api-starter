import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    minlength: 1,
    maxlength: 160
  },
  posterPath: {
    required: true,
    type: String,
    minlength: 10,
    maxlength: 256
  },
  overview: {
    required: true,
    type: String,
    minlength: 1,
    maxlength: 512
  }
});

export default mongoose.model('Movie', movieSchema);
