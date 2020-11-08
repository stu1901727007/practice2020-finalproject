/**
 * Api NASA
 */
class Api {

    constructor(...param) {

        this.endpointUrl = 'https://images-api.nasa.gov';
        this.search = '/search';
        this.asset = '/asset/{nasa_id}';
        this.metadata = '/metadata/{nasa_id}';
        this.captions = '/captions/{nasa_id}';

        this.init();

        if( param.length == 2 )
        {
            this.call(param[0], param[1]);
        }
    }

    init() {

        return this;
    }

    mostPolupar() {

    }

    call(criteria, callback) {

        let that = this;

        if (typeof callback !== 'function') {
            throw new Error("Проблем с callback");
        }

        let query =[];
        query.push('q='+criteria.q);
        query.push('media_type='+criteria.media_type);

        let enpoint = this.endpointUrl + this.search + '?' + query.join('&');

        $.ajax({
            url: enpoint,
            dataType: 'json'
        }).done(function(data){

            callback( data );

        });

        return this;
    }

}
