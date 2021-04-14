const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please enter a name for the recipe."
    },
    slug: String,
    description: {
      type: String,
      trim: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    photo: String,
  }
);

recipeSchema.index({
  name: "text",
  description: "text",
})

recipeSchema.pre("save", async function (next) {
  if (!this.isModified("name")) {
    next();
    return;
  }

  this.slug = slug(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, "i");
  const postsWithSlug = await this.constructor.find({ slug: slugRegEx });

  if(postsWithSlug.length) {
    this.slug = `${this.slug}-${postsWithSlug.length + 1}`;
  }

  next();
});

module.exports = mongoose.model("Recipe", recipeSchema);