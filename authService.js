import { Log, UserManager } from 'oidc-client';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();
const { SELF_URL } = publicRuntimeConfig;

export class AuthService {
    constructor() {
        const config = {
            authority: "https://lykke.tech",
            client_id: "lykke_website",
            redirect_uri: `${SELF_URL}/auth` || "http://localhost:3000/auth",
            silent_redirect_uri: `${SELF_URL}/auth` || "http://localhost:3000/auth",
            post_logout_redirect_uri: `${SELF_URL}` || "http://localhost:3000",
            response_type: "id_token token",
            scope: "openid profile email"
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