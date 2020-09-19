const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const courseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please enter a course name!",
    },
    slug: String,
    description: {
      type: String,
      trim: true,
    },
    photo: String,
    streamCourse: String,
    downloadCourse1: String,
    downloadCourse2: String,
    starterFile: String,
    certificate: String,
    invoice: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

courseSchema.index({
  name: "text",
  description: "text",
});

// courseSchema.virtual("reviews", {
//   ref: "Review",
//   localField: "_id",
//   foreignField: "post",
// });

// function autopopulate(next) {
//   this.populate("reviews");
//   next();
// }

// courseSchema.pre("find", autopopulate);
// courseSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Course", courseSchema);
