/**
 * Api NASA
 */
class Api {

    /**
     * Api constructor
     * @param param
     */
    constructor() {

        this.cache = new CacheApi();

        this.endpointUrl = 'https://images-api.nasa.gov';
        this.search = '/search';
        this.media = '/asset/';
        this.metadata = '/metadata/';
        this.captions = '/captions/';
    }

    /**
     *
     * @param criteria
     * @param callback
     * @returns {Api|boolean}
     */
    call(criteria, callback) {

        let that = this;

        console.log(criteria);


        if (typeof callback !== 'function') {
            throw new ValidationError("Системен проблем!");
        }

        if (criteria.q == undefined || criteria.q.length <= 0) {
            throw new ValidationError("Няма критерий на търсене!");
        }

        if (criteria.page == undefined)
            criteria.page = 1;

        if (criteria.media_type == undefined)
            criteria.media_type = 'images,video,audio';

        let query = [];
        query.push('page=' + criteria.page);
        query.push('q=' + criteria.q);
        query.push('media_type=' + criteria.media_type);

        if (criteria.center !== undefined)
            query.push('center=' + criteria.center);

        if (criteria.year_start !== undefined)
            query.push('year_start=' + criteria.year_start);

        if (criteria.year_end !== undefined)
            query.push('year_end=' + criteria.year_end);


        const cache = this.cache.getSearch(query);

        if (cache !== null) {
            callback(cache);
            return true;
        }

        const enpoint = this.endpointUrl + this.search + '?' + query.join('&');

        console.log( enpoint) ;

        $.ajax({
            url: enpoint,
            dataType: 'json'
        }).done(function (result) {

            const items = Utils.normalise(result.collection.items);

            let data = {
                'items': items,
                'total_hits': result.collection.metadata.total_hits
            };

            that.cache.saveSearch(query, data);

            callback(data);
        }).fail(function () {
            throw new ValidationError("Възникна проблем при четене от API! Опитайте след 5 минути.");
        });

        return this;
    }

    /**
     *
     * @param mediaId
     * @param callback
     * @returns {Api|boolean}
     */
    callMedia(mediaId, callback) {

        let that = this;

        if (typeof callback !== 'function') {
            throw new ValidationError("Проблем с callback");
        }

        if (mediaId == undefined || mediaId.length <= 0) {
            throw new ValidationError("Няма критерий на търсене!");
        }

        let query = [];
        query.push('media_id=' + mediaId);

        // const cache = this.cache.getSearch(query);
        //
        // if (cache !== null) {
        //     callback(cache);
        //     return true;
        // }

        const enpoint = this.endpointUrl + this.media + mediaId;

        $.ajax({
            url: enpoint,
            dataType: 'json'
        }).done(function (result) {

            consol.log(result);

            //const items = Utils.normalise(result.collection.items);

            // let data = {
            //     'items': items,
            //     'total_hits': result.collection.metadata.total_hits
            // };
            //
            // that.cache.saveSearch(query, data);

            callback(data);
        });

        return this;
    }
}
