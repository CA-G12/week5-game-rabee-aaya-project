/* eslint-disable linebreak-style */
const router = require('express').Router();

const conroller = require('../controllers');

router.get('/', conroller.getHomePage);

router.get('/public/infoPage/', conroller.getInfoPage.html);
router.get('/public/infoPage/index.css', conroller.getInfoPage.css);
router.get('/public/infoPage/index.js', conroller.getInfoPage.js);
router.get('/public/infoPage/dom.js', conroller.getInfoPage.dom);

router.get('/public/infoPage/index.html/gameID/:gameID', (req, res) => {
  const response = conroller.getInfoPage.getGameInfo(req.params.gameID);
  response.then((data) => res.send(data));
});

module.exports = router;
