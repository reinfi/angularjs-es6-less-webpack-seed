class OAuthService {
    constructor($http, $timeout, oAuthConfig, oAuthTokenService) {
        this.$http = $http;
        this.$timeout = $timeout;
        this.oAuthConfig = oAuthConfig;
        this.oAuthTokenService = oAuthTokenService;
    }

    requestToken() {
        if (this.oAuthTokenService.getToken() !== null) {
            // need to validate?
            return;
        }

        this.oAuthConfig.valid();

        let request1 = this.$http.post(
            this._buildTokenUri(),
            this._buildTokenParameter(),
            {
                headers: {
                    'Authorization': undefined,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        ).then(response => {
            this.oAuthTokenService.setToken(response.data);
            this.oAuthTokenService.setPendingRequest(undefined);

            return response;
        });

        let request = this.$timeout(() => {
            return {
                access_token: Math.random(),
                token_type: 'Bearer',
                expires_at: (new Date()).getTime() + 60000,
            };
        }, 250)
            .then(tokenData => {
                this.oAuthTokenService.setToken(tokenData);
                this.oAuthTokenService.setPendingRequest(undefined);

                return tokenData;
            });

        this.oAuthTokenService.setPendingRequest(request);

        return request;
    }

    _buildTokenUri() {
        return this.oAuthConfig.get('baseUrl') + this.oAuthConfig.get('tokenPath');
    }

    _buildTokenParameter() {
        let parameters = {
            client_id: this.oAuthConfig.get('clientId'),
            grant_type: this.oAuthConfig.get('grantType'),
        };

        if (angular.isDefined(this.oAuthConfig.get('clientSecret'))) {
            parameters.client_secret = this.oAuthConfig.get('clientSecret');
        }

        return parameters;
    }
}

OAuthService.$inject = [
    '$http',
    '$timeout',
    'oAuthConfig',
    'oAuthTokenService',
];

export default OAuthService;