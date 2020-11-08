(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>За проекта:</p>\n<p>\n    Курсов проект по задание.<br/>\n\n    Витали Атиас<br/>\n    ФМИ 2020\n</p>";
},"useData":true});
templates['credits'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>\n<ul>\n    <li>Изображения <a href=\"https://images.nasa.gov/\" rel=\"nofollow\">NASA Image and\n        Video Library</a>.\n    </li>\n    <li>Based on <a href=\"https://getbootstrap.com/\" rel=\"nofollow\">Bootstrap</a>.</li>\n    <li>Web fonts from <a href=\"https://fonts.google.com/\" rel=\"nofollow\">Google</a>.</li>\n\n    <li>Icons made by:</li>\n    <a href=\"https://fontawesome.com/\" rel=\"nofollow\">Font Awesome</a>\n    <li><a href=\"https://www.flaticon.com/authors/freepik\" title=\"Freepik\">Freepik</a>\n        from<a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a>.\n    </li>\n    <li><a href=\"https://flat-icons.com/\" title=\"Flat Icons\">Flat Icons</a> from <a\n            href=\"https://www.flaticon.com/\" title=\"Flaticon\"> www.flaticon.com</a>\n    </li>\n    <li><a\n            href=\"https://www.flaticon.com/free-icon/mars_683448?term=mars&page=1&position=17\"\n            title=\"Nikita Golubev\">Nikita Golubev</a> from <a href=\"https://www.flaticon.com/\"\n                                                              title=\"Flaticon\"> www.flaticon.com</a>\n    </li>\n    <li>\n        <a href='https://www.freepik.com/vectors/medical'>Medical vector created by freepik - www.freepik.com</a>\n    </li>\n</ul>\n</p>";
},"useData":true});
templates['home'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"col-12 col-lg-6 col-xl-4\">\n                            <div class=\"ph-item\">\n                                <div class=\"ph-col-12\">\n                                    <div class=\"ph-picture\"></div>\n                                    <div class=\"ph-row\">\n                                        <div class=\"ph-col-4\"></div>\n                                        <div class=\"ph-col-8 empty\"></div>\n                                        <div class=\"ph-col-12\"></div>\n                                    </div>\n                                </div>\n                                <div>\n                                    <div class=\"ph-row\">\n                                        <div class=\"ph-col-12\"></div>\n                                        <div class=\"ph-col-2\"></div>\n                                        <div class=\"ph-col-10 empty\"></div>\n                                        <div class=\"ph-col-8 big\"></div>\n                                        <div class=\"ph-col-4 big empty\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"home-wrapper\">\n\n    <div class=\"filter-wrapper row\">\n        <div class=\"col-md-7 m-auto\">\n            <form action=\"\" class=\"filter-form\" autocomplete=\"off\">\n                <div class=\"search text-left text-lg-center\">\n\n                    <h4 class=\"mb-2\" data-aos=\"fade-down\">Търсене</h4>\n\n                    <div class=\"input-group mb-3\" data-aos=\"fade-up\" data-aos-delay=\"50\">\n                        <input name=\"search\" class=\"home-search form-control form-control-lg\" type=\"text\"\n                               placeholder=\"Въведи какво търсиш ...\"/>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-primary btn-search\" type=\"button\">\n                                <i class=\"fas fa-search\"></i>\n                            </button>\n                        </div>\n\n                        <div class=\"advance\">\n                            <a href=\"#\">Детайлно търсене</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"filters ml-3 mt-2\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" checked name=\"media_type[]\" type=\"checkbox\"\n                               id=\"inlineCheckbox1\" value=\"images\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">Изображения</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" checked name=\"media_type[]\" type=\"checkbox\"\n                               id=\"inlineCheckbox2\" value=\"video\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox2\">Видео</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" checked name=\"media_type[]\" type=\"checkbox\"\n                               id=\"inlineCheckbox3\" value=\"audio\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox3\">Аудио</label>\n                    </div>\n\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <div class=\"row\" data-aos=\"fade-up\" data-aos-delay=\"50\">\n        <div class=\"col-12 col-md-10 m-auto\">\n            <div class=\"most-popular-wrapper view-group\">\n\n                <h4 class=\"mb-4\">От галерията</h4>\n                <div class=\"row placeholders\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"times")||(depth0 && lookupProperty(depth0,"times"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),3,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":20},"end":{"line":75,"column":30}}})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"row results-container d-none\"></div>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"grid-item col-12 col-lg-6 col-xl-4 mb-3\" data-aos=\"fade-up\" data-id=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"media_id") : depth0), depth0))
    + "\">\n        <div class=\"card\">\n\n            <div class=\"img-container\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"image") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":11,"column":23}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"ifeq")||(depth0 && lookupProperty(depth0,"ifeq"))||container.hooks.helperMissing).call(alias3,(depth0 != null ? lookupProperty(depth0,"media_type") : depth0),"audio",{"name":"ifeq","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":15,"column":25}}})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"caption card-body\">\n                <h5 class=\"card-title\">\n                    <a href=\"#\" class=\"item-url\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</a>\n                </h5>\n                <p class=\"inner\">\n                    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0))
    + "\n                </p>\n                <div class=\"row\">\n                    <div class=\"col-xs-12 col-md-6\">\n                        <a class=\"alert-link item-url\" href=\"#\">Виж повече</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"img lazy\" style=\"background-image: url('assets/images/img.jpg');\"\n                         data-bg=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"image") : depth0), depth0))
    + "\">\n                        <a href=\"#\" class=\"item-url\"></a>\n                    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    Audio\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":32,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['missing'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"\">";
},"useData":true});
templates['modal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal fade\" id=\"innerModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":40},"end":{"line":5,"column":49}}}) : helper)))
    + "</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
})();