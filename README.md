# revue
重灌一次 為了 router
不會直接加入

tailwind 直接加 vue add tailwind 再npm run build 才可用



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