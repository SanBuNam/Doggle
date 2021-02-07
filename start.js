const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

mongoose.connect(process.env.DATABASE).catch(err => console.log(err), { autoIndex: false });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.error(`Stop!🚫  → ${err.message}`);
});

require("./models/Post");
require("./models/User");
require("./models/Review");

const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});