function oauthInterceptor($q, oAuthTokenService) {
    return {
        request: function(config) {
            config.headers = config.headers || {};

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

oauthInterceptor.$inject = ['$q', 'oAuthTokenService'];

export default oauthInterceptor;