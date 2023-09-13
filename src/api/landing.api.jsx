import axios from "axios";

const landingsApi = axios.create({
  baseURL: 'http://localhost:8000/api_portfolio/landing/'
})

export const getAllLandings = () => landingsApi.get('/');