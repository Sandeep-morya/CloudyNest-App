import axios from "axios";
import { envs } from "../data";

const { BASE_URL } = envs;
const API = axios.create({ baseURL: BASE_URL });

export default API;
