//save result. delete. view
const express = require('express');
const router = express.Router();

const controller = require('../controllers/children.js')


//save one set of results
router.post('/add_child', controller.postSave);
// router.post('/saveResult', controller.postSave);

router.get('/find_child', controller.getChild);
// router.post('/deleteResult', controller.postDelete);

//get all saved results for specific user
router.get('/children', controller.getChildren);
// router.get('/getResults', controller.getResults);

module.exports = router;