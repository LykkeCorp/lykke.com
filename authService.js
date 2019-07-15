import { Log, UserManager, WebStorageStateStore } from 'oidc-client';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const { SELF_URL, AUTH_REDIRECT_URL, AUTH_SERVER_URL } = publicRuntimeConfig;

export class AuthService {
    constructor() {
        const config = {
            authority: AUTH_SERVER_URL || "https://lykke.tech",
            client_id: "850e2ee9-3cd6-4f10-a44a-ac2c0ad2d64d",
            redirect_uri: AUTH_REDIRECT_URL || `${SELF_URL}/auth` || "http://localhost:3000/auth",
            silent_redirect_uri: AUTH_REDIRECT_URL || `${SELF_URL}/auth` || "http://localhost:3000/auth",
            post_logout_redirect_uri: `${SELF_URL}` || "http://localhost:3000",
            response_type: "id_token token",
            scope: "openid profile email",
            userStore: new WebStorageStateStore({ store: window.localStorage }),
        };
        this.userManager = new UserManager(config);

        Log.logger = console;
        Log.level = Log.INFO;
    }

    manager = () => {
        return this.userManager
    };

    getUser = () => {
        return this.userManager.getUser();
    };

    login = () => {
        return this.userManager.signinRedirect();
    };

    renewToken = () => {
        return this.userManager.signinSilent();
    };

    logout = () => {
        return this.userManager.signoutRedirect();
    }
}