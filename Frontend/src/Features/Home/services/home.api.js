import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export async function getHomeData() {
  try {
    const response = await api.get("/home");

    if (!response || !response.data) {
      console.error("Invalid API response", response);
      return;
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
