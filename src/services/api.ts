import axios from "axios";
import { BASE_URL } from "constans";

export const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: "Client-ID BDjEaXLounE3J5uJLhCB5BvsFlMFIYA0Y7nxxWE9FLE",
  },
});
