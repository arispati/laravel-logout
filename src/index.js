"use strict";

module.exports = function() {
    $(document).on('click', '[laravel-logout]', function() {
        let token   = document.head.querySelector('meta[name="csrf-token"]');
        let action  = this.dataset.action ? this.dataset.action : '/logout';

        if (token) {
            let form = document.createElement('form');
            form.setAttribute('id', $.now());
            form.setAttribute('method', 'post');
            form.setAttribute('action', action);

            let input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', '_token');
            input.setAttribute('value', csrf_token);

            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
    });
}
