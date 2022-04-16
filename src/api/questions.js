import { API_QUESTIONS } from "../utils/constants";

export const getQuestions = async () => {
  try {
    const res = await fetch(API_QUESTIONS);
    return await res.json();
  } catch (error) {
    throw error;
  }
};
