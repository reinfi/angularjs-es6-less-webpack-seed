function run(oAuthService) {
    oAuthService.requestToken();
}

run.$inject = ['oAuthService'];

export default run;