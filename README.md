# revue
分兩大檔案 frontedn backend
---------------
重灌一次 為了 router
不會直接加入
-----------
tailwind 直接加 vue add tailwind 再npm run build 才可用
--------------
mounted(){
  axios.get('http://localhost:5000/test_vue')             
  .then(function (response) {
    console.log(response.data);
    }
  }  
後來?????

 mounted(){
  axios.get('http://localhost:5000/test_vue')
  .then(response =>{
    console.log(response.data);
    }
  }  
---------------
cors 裝套件 不同網域
-----------------

    <router-link :to="`/EditArticle/${article._id}`" 
    有參數要加:  v-bind



問題一： 
    redirect 不回來  先用router.push擋 但沒先後順序

      router.post('/', async (req,res,next)=>{
        req.article = new ArticleDb()
        let article = req.article
        article.title= req.body.article.title
        article.description= req.body.article.description
        article.markdown= req.body.article.markdown
        try{
            article = await article.save()
            //res.render('articles/test.ejs')
            //res.redirect('https://www.google.com/')
            //res.redirect('http://localhost:8080/')
            //res.redirect(`/articles/${article.id}`)
       過得去 回不來                                                           
       前端路徑  偷吃步 
       createpost(){
           postservice.PostArticle('http://localhost:5000/articles',this.article)
           router.push({ path: '/' })   
      }
       deletearticle(id){
          postservice.DeleteArticle(`http://localhost:5000/articles/${id}`)
          router.push({ path: '/about' })
      }


問題二：  login register 沒概念