import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/userRegister"
const PRODUCT_API_BASE_URL = "http://localhost:8080/login"


class LoginService {
    register(user) {
        return axios.post(USER_API_BASE_URL,user);
    }
    login(user){
        return axios.post(PRODUCT_API_BASE_URL,user);
    }
 
}
export default new LoginService()

// //import axios from 'axios';

// const USER_API_BASE_URL = 'http://localhost:8080/';

// class ApiService {

//     addUser(user) {
//         return axios.post(USER_API_BASE_URL + '/registeruser', user);
//     }

//     editUser(user) {
//         return axios.put(USER_API_BASE_URL + '/' + user.id, user);
//     }

//     login(user) {
//         return axios.post("http://localhost:8080/userLogin", user);
//     }

// }

// export default new ApiService();