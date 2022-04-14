import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/getAllPosts"
var PRODUCT_API_BASE_URL = "http://localhost:8080/addPost"

class PostService {
    getPosts() {
        return axios.get(USER_API_BASE_URL);
    }
    addPost(post,id){
        // post.category_id=id;
      var url= "http://localhost:8080/"+id+"/addPost"
    
        id=localStorage.getItem("category");
        return axios.post(PRODUCT_API_BASE_URL+'/'+id,post);
    }
 
}
export default new PostService()