if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  //--------//
const express = require('express')
const mongoose = require('mongoose')
const ArticleDb = require('./models/article')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')
const app = express()
//--------
const bcrypt = require('bcrypt')
const flash = require('express-flash') 
const session = require('express-session')
const passport = require('passport')
const initializePassport = require('./passport-config')     //引用passport-config的函式
initializePassport(
    passport,                                               //variable:passport
    email =>users.find(user =>user.email ===email) ,          //function:getUserByEmail
    id =>users.find(user =>user.id ===id) 
)

const users =[]
//--------//
mongoose.connect('mongodb://localhost/blog'

   //,{useNewUrlParser:true,useUnifiedTopology:true }   
)
//-------
app.use(express.static('style'));


app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize())
app.use(passport.session())

//------//
app.set('view engine','ejs') 


app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


app.get('/test_vue',checkNotAuthenticated,(req,res)=>{
  res.render('articles/vue_chapter_2.ejs')
})

app.get('/index',checkAuthenticated,async(req,res)=>{        
    const articles=await ArticleDb.find().sort({createdAt:'desc'})
    res.render('articles/index.ejs',{articles:articles,name:req.user.name})       
})


app.get('/login',checkNotAuthenticated,(req,res)=>{
    res.render('articles/login.ejs')
})


app.post('/login',checkNotAuthenticated,  passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
    failureFlash: true
  }
  ))

app.get('/register',checkNotAuthenticated,(req,res)=>{
    res.render('articles/register.ejs')
})

app.post('/register',async(req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
          
        })
        res.redirect('/login')
      
        
      } catch {
        res.redirect('/register')
      }
      console.log(users)
})
app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/register')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/index')
    }
    next()
  }
module.exports = checkAuthenticated
//-------//
app.use('/articles',articleRouter)
app.listen(5000)
