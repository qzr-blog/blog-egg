module.exports = app => {
  const mongoose = app.mongoose,
    Schema = mongoose.Schema

  let counter = 1
  let CountedId = { type: Number, default: () => counter++ }

  const UserSchema = new Schema(
    {
      name: String,
      password: String,
      id: CountedId
    },
    {
      timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
      }
    }
  )

  const USER = mongoose.model('User', UserSchema)

  USER.find({ id: { $gt: 0 } })
    .sort({ id: -1 })
    .then(([first]) => {
      if (first) counter = first.id + 1
    })

  return USER
}
