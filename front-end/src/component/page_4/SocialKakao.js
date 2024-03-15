import React from 'react';
import KakaoLogin from "react-kakao-login";
import axios from 'axios';

const SocialKakao = () => {
    const kakaoClientId = '1b68666850137dbc9eb49cd87836aa3a';

    const kakaoOnSuccess = async (data) => {
        const kakaoAccessToken = data.response.access_token;
        try {
            // 카카오 로그인 정보를 백엔드로 전송
            const response = await axios.post('/api/auth/kakao', { accessToken: kakaoAccessToken });
            // 성공적으로 로그인되었음을 처리
        } catch (error) {
            // 로그인 실패를 처리
        }
    };

    const kakaoOnFailure = (error) => {
        console.log(error);
    };

    return (
        <div>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
            />
        </div>
    );
};

export default SocialKakao;