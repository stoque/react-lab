import axios from 'axios'

const getUserInfo =  (username) => axios.get(`https://api.github.com/users/${username}`)

const getRepos = (username) => axios.get(`https://api.github.com/users/${username}/repos`)

export {
  getUserInfo,
  getRepos
}