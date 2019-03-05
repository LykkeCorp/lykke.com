import React, { Component } from 'react'
import { UserManager } from 'oidc-client'

class Auth extends Component {
    componentDidMount() {
        new UserManager({ loadUserInfo: true, filterProtocolClaims: true }).signinRedirectCallback().then(function (user) {
            window.history.replaceState(
                {},
                window.document.title,
                window.location.origin + window.location.pathname);
            window.location.href = "/";
        }).catch(function (err) {
            sessionStorage.clear();
        });
    }
    render() {
        return null
    }
}

export default Auth;