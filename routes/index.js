import express from'express';
let router = express.Router();
import movies from './movies.route.js'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Flickz server ready');
});
router.use('/movies', movies)
export default router;
