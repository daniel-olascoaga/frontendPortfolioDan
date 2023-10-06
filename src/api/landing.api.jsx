import axios from "axios";

const landingsApi = axios.create({
  baseURL: 'https://danolas.pythonanywhere.com/landing/'
})

export const getAllLandings = () => landingsApi.get('/');