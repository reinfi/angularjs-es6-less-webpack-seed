class Service {
    constructor($q) {
        this.$q = $q;
    }

    getCount() {
        return this.$q.resolve(0);
    }

    add(item) {
        return this.$q.resolve(
            {
               favorite_id: 123456,
            }
        )
    }

    remove(item) {
        return this.$q.resolve(
            {}
        )
    }
}

Service.$inject = ['$q'];

export default Service;