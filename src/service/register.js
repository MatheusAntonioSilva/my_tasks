import axios from 'axios'

const basePath = "http://18.188.122.22:8001/users"

export function addUser(user) {
  console.log(user)
  return axios.post(basePath, user)
}
