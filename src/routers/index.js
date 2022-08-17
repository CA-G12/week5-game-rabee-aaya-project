const router = require('express').Router();

const { getHomePage, fetchData, fetchResults } = require('../controllers');

router.get('/', getHomePage);
router.get('/data', fetchData);
router.get('/search/call', fetchResults);

module.exports = router;
