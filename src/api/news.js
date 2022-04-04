import { API_HOST } from "../utils/constants";

export async function getNewsApi() {
  const api_key = "ddd6493ca6dc4f7395c4883beac56982";
  try {
    const url = `${API_HOST}${api_key}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getNewsDetailByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
