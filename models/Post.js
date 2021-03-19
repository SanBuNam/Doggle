const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please enter a post name!",
    },
    slug: String,
    description: {
      type: String,
      trim: true,
    },
    tags: [String],
    created: {
      type: Date,
      default: Date.now,
    },
    photo: String,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: "You must supply an author",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.index({
  name: "text",
  description: "text",
});

postSchema.pre("save", async function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }
  this.slug = slug(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, "i");
  const postsWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (postsWithSlug.length) {
    this.slug = `${this.slug}-${postsWithSlug.length + 1}`;
  }
  next();
});

postSchema.statics.getTagsList = function () {
  return this.aggregate([
    { $unwind: "$tags" },
    { $group: { _id: "$tags", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
  ]);
};

postSchema.statics.getTopPosts = function () {
  return this.aggregate([
    {
      $lookup: {
        from: "reviews",
        localField: "_id",
        foreignField: "post",
        as: "reviews",
      },
    },
    { $match: { "reviews.1": { $exists: true } } },
    {
      $project: {
        photo: "$$ROOT.photo",
        name: "$$ROOT.name",
        reviews: "$$ROOT.reviews",
        slug: "$$ROOT.slug",
        averageRating: { $avg: "$reviews.rating" },
      },
    },
    { $sort: { averageRating: -1 } },
    { $limit: 21 },
  ]);
};

postSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "post",
});

function autopopulate(next) {
  this.populate("reviews");
  next();
}

postSchema.pre("find", autopopulate);
postSchema.pre("findOne", autopopulate);

module.exports = mongoose.model("Post", postSchema);
