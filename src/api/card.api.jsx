import axios from 'axios'

const cardApi = axios.create({
  baseURL: 'https://danolas.pythonanywhere.com/card/'
})

export const getAllCards = () => cardApi.get('/');