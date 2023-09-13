import axios from "axios";

const skillsApi = axios.create({
  baseURL: 'http://localhost:8000/api_portfolio/skill/'
})

export const getAllSkills = () => skillsApi.get('/');