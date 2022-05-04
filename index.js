const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/mongoLearn",{useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);

const artigo = new Article({title: "Primeiro Artigo", author: "Jose Marcio", body: "Meu Primeiro Artigo"});

artigo.save();
