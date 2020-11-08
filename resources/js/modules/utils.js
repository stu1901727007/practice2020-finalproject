Handlebars.registerHelper('times', function (n, block) {
    var accum = '';
    for (var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

Handlebars.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});

Handlebars.registerHelper('ifnoteq', function (a, b, options) {
    if (a != b) { return options.fn(this); }
    return options.inverse(this);
});

/**
 *
 */
const Utils = {

    /**
     *
     * @param items
     * @returns {[]}
     */
    normalise: function(items) {
        let list = [];
        let data = null, link = null;
        items.forEach(function (item, key) {
            let i = {};

            console.log(item)
            let hasImage = true;

            if (item.links === undefined)
                hasImage = false;

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
    cutText: function(text, length) {
        if (text == null) {
            return "";
        }
        if (text.length <= length) {
            return text;
        }

        text = text.substring(0, length).trim();
        return text + "...";
    }
}
