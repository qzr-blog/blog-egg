module.exports = app => {
  const mongoose = app.mongoose,
    Schema = mongoose.Schema;

  const InfoSchema = new Schema({
    title: { type: String },
    content: { type: String }
  });

  return mongoose.model("Info", InfoSchema);
};
