interface Config {
    auth0_client_id: string,
    auth0_domain: string,
    auth0_redirect_uri: string,
}

const config: Config = {
    auth0_client_id: "YOUR_CLIENT_ID",
    auth0_domain: "YOUR_DOMAIN",
    auth0_redirect_uri: "REDIRECT_URI (http://localhost:3000)"
}

export default config;