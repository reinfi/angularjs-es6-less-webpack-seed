import FavoriteModule from './favorite/favorite.module';

import AppComponent from './app.component';

angular
    .module('app', [FavoriteModule])
    .component('appRoot', AppComponent);