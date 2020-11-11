/**
 * Управлява полетата за търсене и филтриране
 */
class Search {

    /**
     * Search constructor
     */
    constructor() {

        this.timerSearch = null;
        this.nasaCenters = {
            'ARC': 'Ames Research Center',
            'AFRC': 'Armstrong Flight Research Center',
            'GRC': 'Glenn Research Center',
            'GSFC':'Goddard Space Flight Center',
            'GISS': 'Goddard Institute of Space Studies',
            'JPL': 'Jet Propulsion Laboratory',
            'JSC': 'Johnson Space Center',
            'KSC' : 'Kennedy Space Center',
            'LaRC': 'Langley Research Center',
            'MSFC': 'Marshall Space Flight Center',
            'MAF': 'Michoud Assembly Facility',
            'SSC': 'Stennis Space Center',
            'WFF': 'Wallops Flight Facility',
            'WSMR': 'White Sands Test Facility'
        };

        this.init();
    }

    /**
     *
     * @returns {Search}
     */
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
        $(document).on('keyup', '.filter-form input[name="search"]', function (e) {

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

        /**
         * Детайлно търсене
         */
        $(document).on('click', '.advanced-search', function (e) {

            e.preventDefault();

            clearTimeout(that.timerSearch);
            that.showAdvance();

        });

        return this;
    }

    /**
     *
     * @returns {Search}
     */
    search() {

        try {
            app.api.call(this.prepareSearchObject(), app.loadResults.bind(app));
        } catch (err) {
        }

        return this;
    }

    /**
     *
     * @returns {{q: (jQuery|string|undefined), media_type: *}}
     */
    prepareSearchObject() {

        let checkedVals = $('.filter-form input[name="media_type[]"]:checked').map(function () {
            return this.value;
        }).get();

        let criteria = {
            'q': $('.filter-form input[name="search"]').val(),
            'center': $('.filter-form select[name="center"]').val(),
            'year_start': $('.filter-form input[name="years-from"]').val(),
            'year_end': $('.filter-form input[name="years-to"]').val(),
            'media_type': checkedVals.join(",")
        };

        return criteria;
    }

    /**
     *
     * @returns {Search}
     */
    showAdvance() {
        $('.filter-wrapper form').html(Handlebars.templates.extendedFilter({'centers': this.nasaCenters}));

        this.initAdvanced();

        return this;
    }

    /**
     *
     * @returns {Search}
     */
    showSimple() {
        $('.filter-wrapper form').html(Handlebars.templates.mainFilter());

        return this;
    }

    /**
     *
     * @returns {Search}
     */
    initAdvanced() {
        let d = new Date();

        $("#ranges").html("1920г. - " + d.getFullYear() + "г.");
        $("#years-from").val(1920);
        $("#years-to").val(d.getFullYear());

        $("#year-range").slider({
            range: true,
            min: 1920,
            max: d.getFullYear(),
            values: [1920, d.getFullYear()],
            slide: function (event, ui) {
                $("#years-from").val(ui.values[0]);
                $("#years-to").val(ui.values[1]);

                $("#ranges").html(ui.values[0] + "г. - " + ui.values[1] + "г.");
            }
        });

        return this;
    }
}
