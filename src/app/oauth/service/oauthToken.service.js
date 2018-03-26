class OAuthTokenService {
    constructor($q, oAuthStorageService) {
        this.$q = $q;
        this.oAuthStorageService = oAuthStorageService;
        this.pendingRequest = undefined;
    }

    setPendingRequest(pendingRequest) {
        this.pendingRequest = pendingRequest;
    }

    setToken(data) {
        this.oAuthStorageService.store(data);
    }

    getToken() {
        return this.oAuthStorageService.get();
    }

    getAccessToken() {
        const {access_token} = this.getToken() || {};

        return access_token;
    }

    getAuthorizationHeader() {
        if (this.pendingRequest) {
            return this.$q
                .when(this.pendingRequest)
                .then(() => this.getAuthorizationHeader());
        }

        const tokenType = this.getTokenType();
        const accessToken = this.getAccessToken();

        if (!tokenType || !accessToken) {
            return this.$q.reject();
        }

        return this.$q.resolve(
            `${tokenType.charAt(0).toUpperCase() + tokenType.substr(1)} ${accessToken}`
        );
    }

    getTokenType() {
        const {token_type} = this.getToken() || {};

        return token_type;
    }
}

OAuthTokenService.$inject = ['$q', 'oAuthStorageService'];

export default OAuthTokenService;