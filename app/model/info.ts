module.exports = app => {
  const mongoose = app.mongoose,
    Schema = mongoose.Schema

  const InfoSchema = new Schema(
    {
      title: { type: String },
      content: { type: String }
      // time: { type: Date, default: Date.now },
    },
    {
      timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
      }
    }
  )

  return mongoose.model('Info', InfoSchema)
}
