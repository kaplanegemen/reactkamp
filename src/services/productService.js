import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://jsonplaceholder.typicode.com/todos/1")
    }

}