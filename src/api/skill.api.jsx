import axios from "axios";

const skillsApi = axios.create({
  baseURL: 'https://danolas.pythonanywhere.com/skill/'
})

export const getAllSkills = () => skillsApi.get('/');