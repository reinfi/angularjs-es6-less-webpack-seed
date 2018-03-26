const STORAGE_NAME = 'token';

class OAuthStorageService {
    constructor($window) {
        this.$window = $window;

        this.canUseStorage = true;
    }

    store(data) {
        if (!this.canUseStorage) {
            this.data = data;

            return;
        }

        try {
            this.$window.sessionStorage.setItem(
                STORAGE_NAME,
                JSON.stringify(data)
            );
        } catch (exception) {
            this.canUseStorage = false;
            this.data = data;
        }
    }

    get() {
        let tokenData = this._internalGet() || {};

        if (!this._invalidTokenData(tokenData)) {
            return null;
        }

        return tokenData;
    }

    _internalGet() {
        if (!this.canUseStorage) {
            return this.data;
        }

        try {
            return JSON.parse(this.$window.sessionStorage.getItem(STORAGE_NAME));
        } catch (exception) {
            return this.data;
        }
    }

    _invalidTokenData(tokenData) {
        return (
            angular.isUndefined(tokenData.expires_at)
            || new Date().getTime() > tokenData.expires_at
        );
    }
}

OAuthStorageService.$inject = ['$window'];

export default OAuthStorageService;