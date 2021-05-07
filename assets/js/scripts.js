        /* Javascript snippets supplied by my mentor, Simen Daehlin */

        /* Sign-up Success Modal */
        $('#sign-up-form').on('submit', function (e) {
            e.preventDefault();
            $('#sign-up-success').modal('show');
        });