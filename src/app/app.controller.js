class Controller {
    constructor($http) {
        this.$http = $http;

        this.$onInit = this._onInit;
    }

    _onInit() {
        this.$http.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                console.log('finished request', response);
            });
    }
}

export default Controller;