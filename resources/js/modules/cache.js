/**
 *
 */
class CacheApi {
    /**
     * Cache constructor
     */
    constructor() {

        this.cacheApi = 'api-calls';

        //
        // if( localStorage.getItem(this.cacheApi) === null )
        // {
        //     localStorage.setItem(this.cacheApi, []);
        // }
        //
        // this.storage = localStorage.getItem( this.cacheApi );
    }

    /**
     *
     * @param key
     * @returns {boolean}
     */
    has(key) {
        return localStorage.getItem(key) === null ? false : true;
    }

    /**
     *
     * @param key
     * @param item
     */
    set(key, item) {
        return localStorage.setItem(key, value);
    }

    /**
     *
     * @param key
     * @returns {string}
     */
    get(key) {
        return localStorage.getItem(key);
    }

    /**
     *
     * @param key
     */
    remove(key) {
        return localStorage.removeItem(key);
    }

    /**
     *
     * @returns {boolean}
     */
    clear() {
        localStorage.clear();

        return true;
    }
}
