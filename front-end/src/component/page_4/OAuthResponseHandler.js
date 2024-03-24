import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'; // axios를 import합니다.

const OAuthResponseHandler = () => {
    const { token, expiration } = useParams();
    const history = useHistory(); // useHistory 훅을 사용하여 history 객체를 가져옵니다.

    useEffect(() => {
        // 토큰과 만료 시간을 사용하여 필요한 작업을 수행합니다.
        console.log('Token:', token);
        console.log('Expiration:', expiration);

        // Axios를 사용하여 헤더에 토큰을 설정합니다.
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        localStorage.setItem('auth_token',token);

        // 메인 페이지로 리다이렉트합니다.
        history.push("/");
        window.location.reload();
    }, [token, expiration, history]);

    return (
        <div>
            {/* 토큰을 받아 처리하는 컴포넌트 내용 */}
            
            
        </div>
    );
};

export default OAuthResponseHandler;
