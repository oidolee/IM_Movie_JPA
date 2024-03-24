const DOMAIN = 'http://localhost:8081';
const API_DOMAIN = `${DOMAIN}/api/v1`;

export const SNS_SIGN_IN_URL = (type: 'kakao' | 'naver') => `${API_DOMAIN}/auth/oauth2/${type}`;