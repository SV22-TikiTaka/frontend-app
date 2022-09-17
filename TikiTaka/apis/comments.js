import axios from 'axios';

//답변 클릭시 답변 상세 정보 보기 기능 구현
export async function showComment(comment_id) {
  try {
    const result = await axios.get(`/api/v1/comments/${comment_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//답변 지우기
export async function deleteComment(comment_id) {
  try {
    const result = await axios.delete(`/api/v1/comments/${comment_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//텍스트 답변 저장
export async function showValidComment(user_id) {
  try {
    const result = await axios.get(`/api/v1/users/${user_id}/comments/text`);
    return result;
  } catch (error) {
    return error;
  }
}

//음설 답변 보여주기
export async function showValidSoundComments(user_id) {
  try {
    const result = await axios.get(`/api/v1/users/${user_id}/comments/sound`);
    return result;
  } catch (error) {
    return error;
  }
}

//투표결과 보기
export async function showValidVoteOptions(user_id) {
  try {
    const result = await axios.get(`/api/v1/users/${user_id}/comments/vote`);
    return result;
  } catch (error) {
    return error;
  }
}

// 답변 보여주기
export async function showComments(question_id) {
  try {
    const result = await axios.get(`/api/v1/comments/questions/${question_id}`);
  } catch (error) {
    return error;
  }
}

//히스토리 페이지에서 질문 클릭시 투표 결과 보기 기능 구현
export async function showVoteResult(question_id) {
  try {
    const result = await axios.get(`/api/v1/comments/vote/${question_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//투표 답변 저장
export async function updateVoteCount(vote_comment_id) {
  try {
    const result = await axios.put(`/api/v1/comments/vote/${vote_comment_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//텍스트 답변 저장
export async function storeComment(data) {
  // data={
  //     "content": "string",
  //     "type": "string",
  //     "question_id": 0
  //   }
  try {
    const result = await axios.post('/api/v1/comments/text', data);
    return result;
  } catch (error) {
    return error;
  }
}

//음성 답변 저장
export async function createSoundComment(file, question_id) {
  const data = {file, question_id};
  try {
    const result = await axios.post('/api/v1/comments/voice', data);
    return result;
  } catch (error) {
    return error;
  }
}
