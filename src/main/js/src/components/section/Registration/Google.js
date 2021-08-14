import React from 'react';
import { GoogleLogin } from 'react-google-login'

const clientId = '831762358117-muirtqqiaoqt0m1co1e7gq30kt1lequc.apps.googleusercontent.com';

export const Google = () => {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Sign in with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default Google;