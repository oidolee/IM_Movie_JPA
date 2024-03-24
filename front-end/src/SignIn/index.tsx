import { SNS_SIGN_IN_URL } from "../apis/index.ts"

export const onSnsSignInButtonClickHandler = (type: 'kakao' | 'naver') => {
    window.location.href = SNS_SIGN_IN_URL(type);
}
