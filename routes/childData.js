//save result. delete. view
const express = require('express');
const router = express.Router();

const controller = require('../controllers/childData.js')


//save one set of results
router.post('/saveChild', controller.postSave);
// router.post('/saveResult', controller.postSave);

router.options('/deleteChild');
//delete one set of results
router.delete('/deleteChild', controller.postDelete);
// router.post('/deleteResult', controller.postDelete);

//get all saved results for specific user
router.get('/getChild', controller.getChild);
// router.get('/getResults', controller.getResults);

module.exports = router;