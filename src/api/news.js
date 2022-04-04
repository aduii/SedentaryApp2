import { API_HOST } from "../utils/constants";
import { API_HOST2 } from "../utils/constants";

export async function getNewsApi() {
  try {
    const url = `${API_HOST}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getNewsDetailByUrlApi() {
  try {
    const response = await fetch(API_HOST);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getNewsApi2() {
  try {
    const url = `${API_HOST2}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getNewsDetailByUrlApi2() {
  try {
    const response = await fetch(API_HOST2);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
