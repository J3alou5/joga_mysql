const articleDbModel = require('../models/article')
const articleModel = new articleDbModel();

class artcileController {
  constructor() {
    const articles = []
  }

  async getAllArticles(req, res) {
    const articles = await articleModel.findAll()
    res.status(201).json({ articles: articles })
  }
}

module.exports = artcileController