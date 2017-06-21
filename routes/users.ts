
import * as express from 'express';
var router:express.Router = express.Router();

/* GET users listing. */
router.get('/', function(req:express.Request, res:express.Response, next) {
  res.send('respond with a resource');
});

module.exports = router;
