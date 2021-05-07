        /* Javascript snippets supplied by my mentor, Simen Daehlin */

        /* Navigation */
        $('.navbar-nav>li>a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });

        /* Sign-up Success Modal */
        $('#sign-up-form').on('submit', function (e) {
            e.preventDefault();
            $('#sign-up-success').modal('show');
        });