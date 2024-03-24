import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function oAuth() {

    const { token, expirationTime } = useParams();
    const [ cookie, setCookie] = useCookies();
    const navigate = useHistory();

    useEffect(() => {

        if (!token || !expirationTime) return;

        const now = (new Date().getTime()) * 1000;
        const expires = new Date(now + Number(expirationTime));

        setCookie('accessToken', token, { expires, path: '/' });
        navigate('/');

    }, [token]);



    return (
        <></>
    )
}   