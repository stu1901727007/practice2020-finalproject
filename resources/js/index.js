/**
 *  Application class
 */
class App {

    /**
     * App constructor
     */
    constructor() {
        this.pageContainer = $('#page-wrapper .page-container');
        this.init();
    }

    /**
     *
     * @returns {App}
     */
    init() {

        AOS.init({once: true});

        this.lazyLoadInstance = new LazyLoad({});

        this.cache = new CacheApi();
        this.navigation = new Navigation();
        this.search = new Search();
        this.api = new Api();

        this.prepareHome();

        return this;
    }

    /**
     *
     * @returns {App}
     */
    prepareHome() {
        this.pageContainer.append(Handlebars.templates.home());
        this.loadHome();

        return this;
    }

    /**
     *
     * @returns {App}
     */
    loadHome() {
        let popular = {q: 'mars', 'media_type': 'video,audio,images'};
        this.api.call(popular, this.loadPopular.bind(this));
        return this;
    }

    /**
     *
     * @param result
     * @returns {App}
     */
    loadPopular(result) {
        let items = null;

        if (result.collection.metadata.total_hits > 0) {

            items = Utils.normalise(result.collection.items);

            let html = Handlebars.templates.item({'items': items});

            $('.most-popular-wrapper .results-container').html(html);

            $('.most-popular-wrapper').imagesLoaded(function () {
                $('.most-popular-wrapper .placeholders').fadeOut();
                $('.most-popular-wrapper .results-container').removeClass('d-none')

                AOS.refresh();

                $('.results-container').masonry({
                    itemSelector: '.grid-item',
                    gutter: 0
                });


                app.lazyLoadInstance.update();
            });
        } else {
            throw new ValidationError('Има проблем със заявката!');
        }

        return this;
    }
}

let app = null;
$(function () {
    app = new App();
});
