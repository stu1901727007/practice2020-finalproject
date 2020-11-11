/**
 *
 */
class CacheApi {
    /**
     * Cache constructor
     */
    constructor() {

        this.cacheApi = 'api-calls';

        if (localStorage.getItem(this.cacheApi) === null) {
            localStorage.setItem(this.cacheApi, '{}');
        }
    }

    /**
     *
     * @param criteria
     * @returns {string|null}
     */
    getSearch(criteria) {
        const hash = md5(JSON.stringify(criteria));
        const cache = JSON.parse(this.get(this.cacheApi));

        return cache[hash] !== undefined ? cache[hash] : null;
    }

    /**
     *
     * @param criteria
     * @param data
     * @returns {boolean}
     */
    saveSearch(criteria, data) {

        const hash = md5(JSON.stringify(criteria));
        let cache = JSON.parse(this.get(this.cacheApi));

        cache[hash] = data;

        this.set(this.cacheApi, JSON.stringify(cache));

        return true
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
        return localStorage.setItem(key, item);
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
