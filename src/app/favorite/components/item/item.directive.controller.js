class Controller {
    constructor(
        $scope,
        favoriteService,
        FAVORITE_CONSTANTS
    ) {
        this.$scope = $scope;
        this.favoriteService = favoriteService;
        this.FAVORITE_CONSTANTS = FAVORITE_CONSTANTS;
    }

    activate() {
        this._buildItem();
    }

    onHeartClick() {
        this._removeOrAdd()
            .then(() => this._updateState());
    }

    _buildItem() {
        this.item = {
            active: this.active,
            tariffVersionId: this.tariffVersionId,
            tariffVersionVariationKey: this.tariffVersionVariationKey,
            isPromoTariff: this.isPromoTariff,
            promotionType: this.promotionType,
            isGoldGrade: this.isGoldGrade,
            contribution: this.contribution,
        }
    }

    _removeOrAdd() {
        if (this.item.active === true) {
            return this.favoriteService.remove(this.item.tariffVersionId);
        }

        return this.favoriteService.add(this.item);
    }

    _updateState() {
        this.item.active = !this.item.active;

        let event = this.item.active ?
            this.FAVORITE_CONSTANTS.EVENTS.ADDED :
            this.FAVORITE_CONSTANTS.EVENTS.REMOVED;

        this.$scope.$emit(event);
    }
}

Controller.$inject = [
    '$scope',
    'favoriteService',
    'FAVORITE_CONSTANTS',
];

export default Controller;