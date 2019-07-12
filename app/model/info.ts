module.exports = app => {
  const mongoose = app.mongoose,
    Schema = mongoose.Schema,
    InfoSchema = new Schema({
      title: { type: String },
      content: { type: String }
    })

  return mongoose.model('Info', InfoSchema)
}
