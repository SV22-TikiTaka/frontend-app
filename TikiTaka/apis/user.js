import axios from 'axios';

//유저 access토큰 발급
export async function userInfoChangeByAccessToken(access_token) {
  try {
    const result = await axios.post(
      `/api/v1/users/by_access_token?${access_token}`,
      {},
      {withCredentials: true},
    );
    return result;
  } catch (error) {
    return error;
  }
}

// 유저 업데이트
export async function updateUser(data) {
  // data={
  //   "insta_id": "string",
  //   "username": "string",
  //   "full_name": "string",
  //   "follower": 0,
  //   "following": 0,
  //   "profile_image_url": "string"
  // }
  try {
    const result = await axios.put(`/api/v1/users`, data);
    return result;
  } catch (error) {
    return error;
  }
}

//유저 생성하기
export async function createUser(data) {
  // data={
  //   "insta_id": "string",
  //   "username": "string",
  //   "full_name": "string",
  //   "follower": 0,
  //   "following": 0,
  //   "profile_image_url": "string"
  // }
  try {
    const result = await axios.post(`/api/v1/users`, data);
    return result;
  } catch (error) {
    return error;
  }
}

//유저 정보보기
export async function showUser(user_id) {
  try {
    const result = await axios.get(`/api/v1/users/${user_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

//유저 정보 삭제하기
export async function deleteUser(user_id) {
  try {
    const result = await axios.delete(`/api/v1/users/${user_id}`);
    return result;
  } catch (error) {
    return error;
  }
}

// 질문 url 가져오기
export async function getQuestionUrl(user_id, question_id) {
  try {
    const result = await axios.get(
      `/api/v1/users/url?${user_id}&${question_id}`,
    );
    return result;
  } catch (error) {
    return error;
  }
}
