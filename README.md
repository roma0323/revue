# revue
重灌一次 為了 router
不會直接加入
-----------
tailwind 直接加 vue add tailwind 再npm run build 才可用
--------------


mounted(){
  axios.get('http://localhost:5000/test_vue')             
  .then(function (response) {
    console.log(response.data);
     this.User = response.data;
後來?????

 mounted(){
  axios.get('http://localhost:5000/test_vue')
  .then(response =>{
    console.log(response.data);
     this.User = response.data;
    this.arrayy = [7,7,7];     
---------------


    cors 裝套件 不同網域
-----------------

    redirect 不回來  先用router.push擋 但沒先後順序
createpost(){
           postservice.PostArticle('http://localhost:5000/articles',this.article)
           router.push({ path: '/' })   
      },
    ----------

    <router-link :to="`/EditArticle/${article._id}`" 
    有參數要加:  v-bind