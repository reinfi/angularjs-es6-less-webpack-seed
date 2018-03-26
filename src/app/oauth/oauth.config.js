function oauthConfig($httpProvider) {
    $httpProvider.interceptors.push('oAuthInterceptor');
}

oauthConfig.$inject = ['$httpProvider'];

export default oauthConfig;