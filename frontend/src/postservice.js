import axios from 'axios'
const url = 'http://localhost:5000/articles/test'


class postservice{
    static PostArticle(article){
        return axios.post(url,{
            article
        },/* {headers: {
            "Access-Control-Allow-Origin" : "http://localhost:8080/",}}*/
        
        );
    }
    static showw(){
        console.log("acssssssssssscsssssssssssss")
    }

}


export default postservice