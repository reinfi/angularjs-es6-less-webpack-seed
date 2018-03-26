import controller from './item.directive.controller';

let directive = () => {
    return {
        restrict: 'A',
        controller: controller,
        controllerAs: 'favoriteItem',
        scope: true,
        bindToController: {
            active: '<',
            calculationParameterId: '@',
            tariffVersionId: '@',
            tariffVersionVariationKey: '@',
            isPromoTariff: '<',
            promotionType: '@',
            isGoldGrade: '<',
            contribution: '@',
        },
        link: scope => {
            scope.favoriteItem.activate();
        }
    }
};

export default directive;