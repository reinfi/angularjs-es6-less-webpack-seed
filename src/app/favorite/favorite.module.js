import ItemHeartComponent from './components/item-heart/item-heart.component';
import WireframeHeartComponent from './components/wireframe-heart/wireframe-heart.component';
import WireframeTooltipComponent from './components/wireframe-tooltip/wireframe-tooltip.component';

import FavoriteDirective from './favorite.directive';
import FavoriteItemDirective from './components/item/item.directive';

import FavoriteService from './services/favorite.service';

import FavoriteConstants from './favorite.constants';

export default angular
    .module('favorite', [])
    .service('favoriteService', FavoriteService)
    .component('favoriteItemHeart', ItemHeartComponent)
    .component('favoriteWireframeHeart', WireframeHeartComponent)
    .component('favoriteWireframeTooltip', WireframeTooltipComponent)
    .directive('favorite', FavoriteDirective)
    .directive('favoriteItem', FavoriteItemDirective)
    .constant('FAVORITE_CONSTANTS', FavoriteConstants)
    .name;