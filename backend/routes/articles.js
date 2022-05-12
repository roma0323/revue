const express = require('express')
const req = require('express/lib/request')
const ArticleDb = require('./../models/article')
const CommentDb = require('./../models/comment')
//const checkAuthenticated = require('./../server')         無法用!!!!!!!!!!!!!!!!!!!
const mongoose = require('mongoose')
const router = express.Router() 
//Articleee.collection.dropIndexes();

router.use(express.urlencoded({extended:false}))
router.use(express.static('style'));

mongoose.connect('mongodb://localhost/blog'

   //,{useNewUrlParser:true,useUnifiedTopology:true }   
)


router.get('/new',(req,res) =>{
    
    res.render('articles/new.ejs',{article:new ArticleDb()})
})

router.get('/:id/comments/new',async(req,res) =>{   //article id
    const article = await ArticleDb.findById(req.params.id)
    res.render('articles/commentsnew.ejs',{comment:new CommentDb(),article:article})
})

router.get('/edit/:id',async(req,res) =>{
    const article = await ArticleDb.findById(req.params.id)

    res.render('articles/edit.ejs',{article:article})
})

router.get('/:id/comments/edit',async(req,res) =>{
    //const article = await Articleee.findOne({id:req.params.id})         
    const comment = await CommentDb.findById(req.params.id)
    res.render('articles/commentsedit.ejs',{comment:comment})
})

router.get('/:id',async(req,res) =>{          //:slug 不確定的參數
    const article = await ArticleDb.findById(req.params.id)    //文章內容  params拿網址列不確定的參數   
    const comments=await CommentDb.find({slug:req.params.id}).sort({createdAt:'desc'})
    if(article == null){                                   //會跑進來
        res.redirect('/index')
        console.log('跑進slug')
    }
    res.render('articles/fullshow.ejs',{article:article,comments:comments})
    
})

router.post('/test', async (req,res,next)=>{
    req.article = new ArticleDb()
    let article = req.article
        article.title= req.body.article.title
        article.description= req.body.article.description
        article.markdown= req.body.article.markdown
        try{
            article = await article.save()
            //res.render('articles/test.ejs')
            res.redirect('https://www.google.com/')
            //res.redirect('http://localhost:8080/')
            //res.redirect(`/articles/${article.id}`)
        }catch(e){
            
            res.render('articles/test.ejs')
        }
    console.log(req.body.article.title) 
})
router.post('/', async (req,res,next)=>{
    req.article = new ArticleDb()
    next()
},saveArticleAndRedirect('new'))

router.post('/:id/comments', async (req,res)=>{       //article id
        req.article =await ArticleDb.findById(req.params.id)  
        let article = req.article
        req.comment = new CommentDb()
        let comment = req.comment
        comment.commentcontent= req.body.commentcontent
        comment.slug=req.params.id
        /*let comment = new Commenttt({
            commentcontent: req.body.commentcontent,
            slug:req.params.slug
        })*/
        try{
            comment = await comment.save()
            res.redirect(`/articles/${article.id}`)                  
        }catch(e){
            
            res.render('articles/test.ejs')
        }
})

router.put('/:id', async (req,res,next)=>{
    req.article =await ArticleDb.findById(req.params.id)
    next()
},saveArticleAndRedirect('edit'))

router.put('/:id/comments', async (req,res)=>{       //comment 的id 
    req.comment =await CommentDb.findById(req.params.id)
    let comment = req.comment
    comment.commentcontent= req.body.commentcontent
   
    try{
        comment = await comment.save()
        res.redirect('/index')                      
        //res.redirect(`/articles/${article.id}`)            //回首頁 問題!!!!!!!!!!!
    }catch(e){
        console.log(e)
        res.render('articles/test.ejs')
    }
})


router.delete('/:id',async(req,res)=>{  
    await ArticleDb.findByIdAndDelete(req.params.id)
    res.redirect('/index')
})

router.delete('/:id/comments/delete',async(req,res)=>{    //comment 的id      
    //let article =await Articleee.findById(req.params.id)
    await CommentDb.findByIdAndDelete(req.params.id)            
    res.redirect('/index')                                      
    //res.redirect(`/articles/${article.slug}`)               //回首頁 問題!!!!!!!!!!!!!!!!!!
})


function saveArticleAndRedirect(path){
    let article = req.article
    return async(req,res)=>{
        let article = req.article
        article.title= req.body.article.title
        article.description= req.body.article.description
        article.markdown= req.body.article.markdown
        try{
            article = await article.save()
            res.redirect('http://localhost:8080/')
            //res.redirect(`/articles/${article.id}`)
        }catch(e){
            res.render(`articles/${path}`.ejs,{article:article})
        }
        
    }
}

module.exports = router