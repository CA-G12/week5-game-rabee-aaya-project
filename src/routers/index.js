/* eslint-disable linebreak-style */
const router = require('express').Router();

const controller = require('../controllers');

router.get('/', controller.getHomePage);
router.get('/data', controller.fetchData);
router.get('/search', controller.fetchResults);

router.get('/public/infoPage/', controller.getInfoPage.html);
router.get('/public/infoPage/index.css', controller.getInfoPage.css);
router.get('/public/infoPage/index.js', controller.getInfoPage.js);
router.get('/public/infoPage/dom.js', controller.getInfoPage.dom);

router.get('/public/infoPage/index.html/gameID/:gameID', (req, res) => {
  const response = controller.getInfoPage.getGameInfo(req.params.gameID);
  response.then((data) => res.send(data));
});

module.exports = router;
