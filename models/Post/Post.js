const mongoose = require('mongoose');
const LikesSchema = require('./Likes');
const CommentsSchema = require('./Comments');

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  likes: [LikesSchema],
  comments: [CommentsSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model('Post', postSchema);
