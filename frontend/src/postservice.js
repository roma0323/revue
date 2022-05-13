import axios from 'axios'
//const url = 'http://localhost:5000/articles/test'


class postservice{
    static PostArticle(url,article){
        return axios.post(url,{
            article
        },/* {headers: {
            "Access-Control-Allow-Origin" : "http://localhost:8080/",}}*/
        );
    }
    static DeleteArticle(url){
        return axios.delete(url);
    }
    static showw(){
        console.log("acssssssssssscsssssssssssss")
    }

}


export default postservice