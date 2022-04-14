import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/getAllCategories"
const PRODUCT_API_BASE_URL = "http://localhost:8080/addCategory"

class CategoryService {
    getAllCategories() {
        return axios.get(USER_API_BASE_URL);
    }
    addCategory(category) {
        return axios.post(PRODUCT_API_BASE_URL, category);
    }

    
}
export default new CategoryService()