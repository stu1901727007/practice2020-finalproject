"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Handlebars.registerHelper('times', function (n, block) {
  var accum = '';

  for (var i = 0; i < n; ++i) {
    accum += block.fn(i);
  }

  return accum;
});
Handlebars.registerHelper('ifeq', function (a, b, options) {
  if (a == b) {
    return options.fn(this);
  }

  return options.inverse(this);
});
Handlebars.registerHelper('ifnoteq', function (a, b, options) {
  if (a != b) {
    return options.fn(this);
  }

  return options.inverse(this);
});
/**
 *
 */

var Utils = {
  /**
   *
   * @param items
   * @returns {[]}
   */
  normalise: function normalise(items) {
    var list = [];
    var data = null,
        link = null;
    items.forEach(function (item, key) {
      var i = {};
      console.log(item);
      var hasImage = true;
      if (item.links === undefined) hasImage = false;
      data = item.data[0];
      link = item.links !== undefined ? item.links[0] : null;
      i.image = link !== null ? link.href : null;
      i.title = data.title;
      i.description = Utils.cutText(data.description, 200);
      i.media_type = data.media_type;
      i.media_id = data.nasa_id;
      list.push(i);
    });
    return list;
  },

  /**
   *
   * @param text
   * @param length
   * @returns {string|*}
   */
  cutText: function cutText(text, length) {
    if (text == null) {
      return "";
    }

    if (text.length <= length) {
      return text;
    }

    text = text.substring(0, length).trim();
    return text + "...";
  }
};
/**
 *
 */

var CacheApi = /*#__PURE__*/function () {
  /**
   * Cache constructor
   */
  function CacheApi() {
    _classCallCheck(this, CacheApi);

    this.cacheApi = 'api-calls'; //
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


  _createClass(CacheApi, [{
    key: "has",
    value: function has(key) {
      return localStorage.getItem(key) === null ? false : true;
    }
    /**
     *
     * @param key
     * @param item
     */

  }, {
    key: "set",
    value: function set(key, item) {
      return localStorage.setItem(key, value);
    }
    /**
     *
     * @param key
     * @returns {string}
     */

  }, {
    key: "get",
    value: function get(key) {
      return localStorage.getItem(key);
    }
    /**
     *
     * @param key
     */

  }, {
    key: "remove",
    value: function remove(key) {
      return localStorage.removeItem(key);
    }
    /**
     *
     * @returns {boolean}
     */

  }, {
    key: "clear",
    value: function clear() {
      localStorage.clear();
      return true;
    }
  }]);

  return CacheApi;
}();
/**
 * Управлява полетата за търсене и филтриране
 */


var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);

    this.timerSearch = null;
    this.init();
  }

  _createClass(Search, [{
    key: "init",
    value: function init() {
      var that = this;
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
        that.timerSearch = setTimeout(that.search.bind(that), 1000);

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
  }, {
    key: "search",
    value: function search() {
      var that = this;
      app.api.call(this.prepareSearchObject(), this.loadResults);
      return this;
    }
  }, {
    key: "prepareSearchObject",
    value: function prepareSearchObject() {
      var checkedVals = $('.filter-form input[name="media_type[]"]:checked').map(function () {
        return this.value;
      }).get();
      var criteria = {
        'q': $('.filter-form input[name="search"]').val(),
        'media_type': checkedVals.join(",")
      };
      return criteria;
    }
  }, {
    key: "loadResults",
    value: function loadResults(results) {
      var collection = results.collection;
      console.log(collection);
      console.log(collection.metadata.total_hits);
    }
  }]);

  return Search;
}();
/**
 * Api NASA
 */


var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);

    this.endpointUrl = 'https://images-api.nasa.gov';
    this.search = '/search';
    this.asset = '/asset/{nasa_id}';
    this.metadata = '/metadata/{nasa_id}';
    this.captions = '/captions/{nasa_id}';
    this.init();

    if (arguments.length == 2) {
      this.call(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
    }
  }

  _createClass(Api, [{
    key: "init",
    value: function init() {
      return this;
    }
  }, {
    key: "mostPolupar",
    value: function mostPolupar() {}
  }, {
    key: "call",
    value: function call(criteria, callback) {
      var that = this;

      if (typeof callback !== 'function') {
        throw new Error("Проблем с callback");
      }

      var query = [];
      query.push('q=' + criteria.q);
      query.push('media_type=' + criteria.media_type);
      var enpoint = this.endpointUrl + this.search + '?' + query.join('&');
      $.ajax({
        url: enpoint,
        dataType: 'json'
      }).done(function (data) {
        callback(data);
      });
      return this;
    }
  }]);

  return Api;
}();
/**
 * Навигация
 */


var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    this.init();
  }

  _createClass(Navigation, [{
    key: "init",
    value: function init() {
      /**
       * Управлява лявата колона
       */
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
      /**
       * Оперира със базови линкове
       */

      $('.lnk-modal').on('click', function () {
        var page = $(this).data('page'),
            modal = Handlebars.templates.modal;
        var html = '';

        switch (page) {
          case 'about':
            html = modal({
              'title': 'За проекта',
              'body': Handlebars.templates.about()
            });
            break;

          case 'credits':
            html = modal({
              'title': 'Кредити',
              'body': Handlebars.templates.credits()
            });
            break;
        }

        $('body').append(html);
        $('#innerModal').modal('show');
        /**
         * Премахваме модалния прозорец
         */

        $('#innerModal').one('hidden.bs.modal', function () {
          $(this).remove();
        });
      });
    }
  }]);

  return Navigation;
}();
/**
 *  Application class
 */


var App = /*#__PURE__*/function () {
  /**
   * App constructor
   */
  function App() {
    _classCallCheck(this, App);

    this.pageContainer = $('#page-wrapper .page-container');
    this.init();
  }
  /**
   *
   * @returns {App}
   */


  _createClass(App, [{
    key: "init",
    value: function init() {
      AOS.init({
        once: true
      });
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

  }, {
    key: "prepareHome",
    value: function prepareHome() {
      this.pageContainer.append(Handlebars.templates.home());
      this.loadHome();
      return this;
    }
    /**
     *
     * @returns {App}
     */

  }, {
    key: "loadHome",
    value: function loadHome() {
      var popular = {
        q: 'mars',
        'media_type': 'video,audio,images'
      };
      this.api.call(popular, this.loadPopular.bind(this));
      return this;
    }
    /**
     *
     * @param result
     * @returns {App}
     */

  }, {
    key: "loadPopular",
    value: function loadPopular(result) {
      var items = null;

      if (result.collection.metadata.total_hits > 0) {
        items = Utils.normalise(result.collection.items);
        var html = Handlebars.templates.item({
          'items': items
        });
        $('.most-popular-wrapper .results-container').html(html);
        $('.most-popular-wrapper').imagesLoaded(function () {
          $('.most-popular-wrapper .placeholders').fadeOut();
          $('.most-popular-wrapper .results-container').removeClass('d-none');
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
  }]);

  return App;
}();

var app = null;
$(function () {
  app = new App();
});
