import axios from 'axios'
//const url = 'http://localhost:5000/articles/test'


class postservice{
    static PostArticle(url,article){
        axios.post(url,{
            article
        }).then(console.log("after postservises"));
        // return 456
    }
    static EditArticle(url,article){
        return axios.put(url,{
            article
        },/* {headers: {    
            "Access-Control-Allow-Origin" : "http://localhost:8080/",}}*/
        );
    }
    static DeleteArticle(url){
        return axios.delete(url);
    }
    static GetArticle(url){
        var article = []
        axios.get(url)
        .then(response =>{
          console.log(response.data);
           article = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
        return article
    }
    static showw(){
        // console.log("acssssssssssscsssssssssssss")
    }

}


export default postservice