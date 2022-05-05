const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/mongoLearn",{useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);


Article.find({}).then(articles => {
    console.log(articles);
}).catch(err => {
    console.log(err);
});


/* Cadastro
const artigo = new Article({title: "Primeiro Artigo",
    author: "Jose Marcio", 
    body: "React do Zero",
    special: true,
    resume: {
        content: "Conteúdo do resumo",
        author: "Autor"
    }
});

artigo.save().then(() => {
    console.log("Artigo Salvo!")
}).catch(err=> {
    console.log(err);
})*/
