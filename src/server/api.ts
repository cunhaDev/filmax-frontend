import axios from "axios";

const api = axios.create({

  baseURL: "https://appfilmax.herokuapp.com/repolinks"

});

export default api;