import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import OAuthResponseHandler from './OAuthResponseHandler'; // 토큰을 받아 처리할 컴포넌트를 임포트합니다.
import OAuthResponseHandler from '../page_4/OAuthResponseHandler';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/auth/oauth-response/:token/:expiration" component={OAuthResponseHandler} />
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
