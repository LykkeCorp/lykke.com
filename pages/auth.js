import React, { Component } from 'react'
import { UserManager, WebStorageStateStore } from 'oidc-client'

class Auth extends Component {
    componentDidMount() {
        new UserManager({ loadUserInfo: true, filterProtocolClaims: true, userStore: new WebStorageStateStore({ store: window.localStorage }) }).signinRedirectCallback().then(function (user) {
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