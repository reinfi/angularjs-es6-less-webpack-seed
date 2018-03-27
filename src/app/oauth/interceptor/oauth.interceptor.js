function oauthInterceptor($q, oAuthTokenService, oAuthConfig) {
    return {
        request: function(config) {
            config.headers = config.headers || {};

            if (
                config.disableOAuth || false === true
                || oAuthConfig.get('enabled') === false
            ) {
                return config;
            }

            if (!config.headers.hasOwnProperty('Authorization')) {
                return oAuthTokenService.getAuthorizationHeader()
                    .then(authorizationHeader => {
                        console.log('authorizationHeader', authorizationHeader);
                        //config.headers.Authorization = authorizationHeader;

                        return $q.resolve(config);
                    });
            }

            return config;
        },
    };
}

oauthInterceptor.$inject = [
    '$q',
    'oAuthTokenService',
    'oAuthConfig',
];

export default oauthInterceptor;