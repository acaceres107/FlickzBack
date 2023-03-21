import express from 'express'
let router = express.Router()
import controller from '../controllers/movies.controller.js'
let {read_all} = controller

router.get('/', read_all)

export default router