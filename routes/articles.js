const express = require('express');
const router = express.Router();
const artcileControllerClass = require('../controller/article');

const artcileController = new artcileControllerClass()

router.get('/article/:slug', (req, res) => artcileController.getArticleBySlug(req, res));
router.get('/', (req, res)=> artcileController.getAllArticles(req, res));

module.exports = router;