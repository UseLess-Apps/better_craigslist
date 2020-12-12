import axios from 'axios';

const { BASE_API_URL = '/api/v1' } = process.env;

const getAllPosts = () => {
  return axios.get(`${BASE_API_URL}/posts`)
    .then((res) => {
      return res.data;
    })
}

const exports = {
  getAllPosts
}

export default exports;