module.exports = app => {
    const mongoose = app.mongoose

    const ContentSchema = new mongoose.Schema({
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        }
    })

    return mongoose.model('Content', ContentSchema)
}