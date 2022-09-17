import axios from 'axios';

//랜덤 질문 생성
export async function showRandomQuestion(type) {
  try {
    const result = await axios.get(`/api/v1/questions/random?${type}`);
    return result;
  } catch (error) {
    return error;
  }
}

//질문 가져오기
export async function getQuestion(question_id) {
  try {
    const result = await axios.get(`/api/v1/questions/${question_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//질문 삭제하기
export async function deleteQuestion(question_id) {
  try {
    const result = await axios.delete(`/api/v1/questions/${question_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//사용자가 등록한 투표를 저장 모르겠습니다,,
export async function createVoteQuestion(user_id, data) {
  // data={
  //     "question": {
  //       "content": "string",
  //       "user_id": 0,
  //       "type": "string",
  //       "comment_type": "string"
  //     },
  //     "option": [
  //       "string"
  //     ]
  //   }
  try {
    const result = await axios.post(`/api/v1/questions/vote/${user_id}`, data);
    return result;
  } catch (error) {
    return error;
  }
}

//질문 생성하기
export async function createQuestion(data) {
  //const [content,user_id,type,comment_type]=data;
  try {
    const result = await axios.post('/api/v1/questions', data);
    return result;
  } catch (error) {
    return error;
  }
}

//유저의 만기된 질문가져오기
export async function showExpiredQuestions(user_id) {
  try {
    const result = await axios.get(`/api/v1/questions/history/${user_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

// 질문 url 가져오기  잘모르겠다
export async function getQuestionFromUrl(question_id) {
  try {
    const result = await axios.get(`/api/v1/question/url?${question_id}`);
    return result;
  } catch (error) {
    return error;
  }
}
