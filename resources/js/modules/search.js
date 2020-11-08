/**
 * Управлява полетата за търсене и филтриране
 */
class Search {

    constructor() {

        this.timerSearch = null;

        this.init();
    }

    init() {

        let that = this;

        /**
         * Превенция за изпращане на формата
         */
        $(document).on('submit', '.filter-form', function (e) {
            e.preventDefault();
        });

        /**
         * При писане във формата
         */
        $(document).on('keyup','.filter-form input[name="search"]', function (e) {

            clearTimeout(that.timerSearch);

            that.timerSearch = setTimeout(that.search.bind(that), 1000)

            if (e.which == 13) {
                clearTimeout(that.timerSearch);
                that.search();
            }
        });

        /**
         * При натискане на търсене
         */
        $(document).on('click', '.filter-form .btn-search', function (e) {

            clearTimeout(that.timerSearch);
            that.search();
        });

        return this;
    }

    search() {
        let that = this;

        app.api.call(this.prepareSearchObject(), this.loadResults);

        return this;
    }

    prepareSearchObject() {

        let checkedVals = $('.filter-form input[name="media_type[]"]:checked').map(function () {
            return this.value;
        }).get();

        let criteria = {'q': $('.filter-form input[name="search"]').val(), 'media_type': checkedVals.join(",")};

        return criteria;
    }

    loadResults(results) {

        let collection = results.collection;

        console.log( collection );
        console.log(collection.metadata.total_hits);
    }
}
