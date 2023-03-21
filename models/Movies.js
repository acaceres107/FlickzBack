import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    "name": {type: String, required: true},
    "description": {type: String, required: true},
    "date":{type: String},
    "web_site":{type: String},
    "photo":{type: String},
    "category_id":{type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true},
    "tomato": {type: Number},
    "duration": {type: String}
}, {timestamps: true})

export const Movies = mongoose.model('movies', movieSchema)