import axios from 'axios'

const cardApi = axios.create({
  baseURL: 'http://localhost:8000/api_portfolio/card/'
})

export const getAllCards = () => cardApi.get('/');