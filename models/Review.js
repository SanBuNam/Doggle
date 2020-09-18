const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: "You must supply an author!",
  },
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
    required: "You must supply a post!",
  },
  text: {
    type: String,
    required: "Your review must have text!",
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: "Course",
    required: "You must supply a course!",
  },
});

function autopopulate(next) {
  this.populate("author");
  next();
}

reviewSchema.pre("find", autopopulate);
reviewSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Review", reviewSchema);
