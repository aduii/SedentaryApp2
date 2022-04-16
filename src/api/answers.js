import { API_ANSWERBYQUESTIONID } from "../utils/constants";

export const getAnswerByQuestionId = async (QuestionId) => {
  try {
    const res = await fetch(`${API_ANSWERBYQUESTIONID}/${QuestionId}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
};
