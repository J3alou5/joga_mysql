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
  async getArticleBySlug(req, res){
    const article = await articleModel.findOne(req.parms.slug)
    res.status(201).json({article: article})
  }
}

module.exports = artcileController