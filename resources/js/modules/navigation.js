/**
 * Навигация
 */
class Navigation {

    constructor() {
        this.init();
    }

    init() {

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

            let page = $(this).data('page'),
                modal = Handlebars.templates.modal;

            let html = '';

            switch (page) {
                case 'about':
                    html = modal({'title': 'За проекта', 'body': Handlebars.templates.about()});
                    break;
                case 'credits':
                    html = modal({'title': 'Кредити', 'body': Handlebars.templates.credits()});
                    break;
            }

            $('body').append(html)
            $('#innerModal').modal('show');

            /**
             * Премахваме модалния прозорец
             */
            $('#innerModal').one('hidden.bs.modal', function () {
                $(this).remove();
            });

        });
    }
}