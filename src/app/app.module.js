import AppComponent from './app.component';
import oauth2 from './oauth/oauth.module';

function config(oAuthConfigProvider) {
    oAuthConfigProvider.configure(
        {
            baseUrl: '/',
            clientId: 'public',
        }
    )
}

config.$inject = ['oAuthConfigProvider'];

angular
    .module('app', [oauth2])
    .component('appRoot', AppComponent)
    .config(config);