import axios from 'axios'

const base_url = `http://localhost:8080`;


const instance = axios.create({
    base_url : base_url
})

export default instance;