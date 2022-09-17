import axios from 'axios';

//authorize 페이지 가기
export async function goToAuthorizePage() {
  try {
    const result = axios.get('/api/v1/authorize');
    return result;
  } catch (error) {
    return error;
  }
}

//refresh토큰 가져오기
export async function getRefreshToken(long_access_token) {
  try {
    const result = axios.get(`/api/v1/refresh_token?${long_access_token}`);
    return result;
  } catch (error) {
    return error;
  }
}
