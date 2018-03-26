import controller from './favorite.directive.controller';

let directive = () => {
    return {
        restrict: 'A',
        controller: controller,
        controllerAs: 'favorite',
        link: scope => {
            scope.favorite.activate();
        }
    }
};

export default directive;