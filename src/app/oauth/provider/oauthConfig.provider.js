const REQUIRED_PARAMETER = [
    'baseUrl',
    'clientId',
    'grantType',
    'tokenPath',
];

function OAuthConfigProvider() {
    this.defaultConfig = {
        baseUrl: null,
        clientId: null,
        clientSecret: null,
        grantType: 'client_credentials',
        tokenPath: '/oauth2/token',
    };

    this.configure = (params) => {
        this.defaultConfig = angular.extend(
            this.defaultConfig,
            params
        );
    };

    this.$get = function() {
        class OAuthConfig {
            constructor(config) {
                this.config = config;
            }

            configure(params) {
                this.config = angular.extend(
                    this.config,
                    params
                );
            }

            valid() {
                angular.forEach(
                    REQUIRED_PARAMETER,
                    propertyName => {
                        if (
                            !this.config.hasOwnProperty(propertyName)
                            || angular.isUndefined(this.config[propertyName])
                            || this.config[propertyName] === null
                        ) {
                            throw new Error(
                                `Missing property ${propertyName} within oauth config`
                            );
                        }
                    }
                )
            }

            get(key) {
                if (angular.isDefined(key)) {
                    return this.config[key];
                }

                return this.config;
            }
        }

        return new OAuthConfig(this.defaultConfig);
    };
}

export default OAuthConfigProvider;