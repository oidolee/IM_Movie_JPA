import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";

const GoogleLoginButton = () => {
    const clientId = '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982440772281-9etlnvcgvupdunn5v1abacnshqgae3ih.apps.googleusercontent.com982440772281-2khhhva4vc8if9a0vrcrhnt3ldsrjlu8.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton