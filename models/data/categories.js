import 'dotenv/config.js'
import '../../config/database.js'
import { Category } from '../Category.js'

let categories = [
    {
        name: 'Romance'
    },
    {
        name: 'Horror'
    },
    {
        name: 'Documentary'
    },
    {
        name: 'Action'
    },
    {
        name: 'Animation'
    },
    {
        name: 'Comedy'
    },    
    {
        name: 'Drama'
    }
]

Category.insertMany(categories)