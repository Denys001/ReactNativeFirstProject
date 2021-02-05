import axios from "axios"

export const Posts = {
    get: (num = 10) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${num}`).then((res) => {
            return res.data
        })
    }
}