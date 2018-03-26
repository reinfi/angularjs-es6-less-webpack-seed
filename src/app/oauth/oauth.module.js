import oauthInterceptor from "./interceptor/oauth.interceptor";
import oauthConfig from "./oauth.config";
import OAuthService from "./service/oauth.service";
import OAuthStorageService from "./service/oauthStorage.service";
import OAuthTokenService from "./service/oauthToken.service";
import OAuthConfigProvider from "./provider/oauthConfig.provider";
import run from "./oauth.run";

export default angular
    .module('oauth', [])
    .config(oauthConfig)
    .run(run)
    .factory('oAuthInterceptor', oauthInterceptor)
    .service('oAuthService', OAuthService)
    .service('oAuthTokenService', OAuthTokenService)
    .service('oAuthStorageService', OAuthStorageService)
    .provider('oAuthConfig', OAuthConfigProvider)
    .name;