import axios from "axios";

var PRODUCT_API_BASE_URL = "http://localhost:8080/addComment"
var GETCOMMENTS= "http://localhost:8080/findComment"
class CommentService {
 

    addComment(post){
        // post.category_id=id;
        var url= "http://localhost:8080/%22+id+%22/addComment"

        var id=localStorage.getItem("Post");
        return axios.post(PRODUCT_API_BASE_URL+'/'+id,post);
    }

    findComment(){
        var id=localStorage.getItem("Post");
        return axios.get(GETCOMMENTS+'/'+id)
    }
    delete(id){
        return axios.post("http://localhost:8080/deleteComment"+"/"+id)
    }
 
}
export default new CommentService()