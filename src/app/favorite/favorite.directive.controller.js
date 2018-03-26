class Controller {
    constructor(
        $scope,
        favoriteService,
        FAVORITE_CONSTANTS
    ) {
        this.$scope = $scope;
        this.favoriteService = favoriteService;
        this.FAVORITE_CONSTANTS = FAVORITE_CONSTANTS;

        this._registerEvents();
    }

    activate() {
        this.favoriteService.getCount().then(count => { this.count = count; });
    }

    _registerEvents() {
        this.$scope.$on(
            this.FAVORITE_CONSTANTS.EVENTS.ADDED,
            () => this._updateCount(1)
        );

        this.$scope.$on(
            this.FAVORITE_CONSTANTS.EVENTS.REMOVED,
            () => this._updateCount(-1)
        );
    }

    _updateCount(amount) {
        this.count = Math.max(this.count + amount, 0);
    }
}

Controller.$inject = [
    '$scope',
    'favoriteService',
    'FAVORITE_CONSTANTS',
];

export default Controller;