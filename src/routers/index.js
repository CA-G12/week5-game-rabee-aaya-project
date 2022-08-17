const router = require('express').Router();

const { getHomePage, fetchData } = require('../controllers');

router.get('/d', getHomePage);
router.get('/data', fetchData);

module.exports = router;
