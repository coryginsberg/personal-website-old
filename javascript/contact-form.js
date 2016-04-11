(function () {
    var contactFormUtils = {
        isValidEmail: function (email) {
            var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        },
        clearErrors: function () {
            $('#emailAlert').remove();
            $('#feedbackForm').find('.help-block').hide();
            $('#feedbackForm').find('.form-group').removeClass('has-error');
        },
        clearForm: function () {
            $('#feedbackForm').find('.glyphicon').removeClass('glyphicon-check').addClass('glyphicon-unchecked').css({color: ''});
            $('#feedbackForm input,textarea').val("");
            grecaptcha.reset();
        },
        addError: function ($input) {
            var parentFormGroup = $input.parents('.form-group');
            parentFormGroup.children('.help-block').show();
            parentFormGroup.addClass('has-error');
        },
        addAjaxMessage: function (msg, isError) {
            $("#feedbackSubmit").after('<div id="emailAlert" class="alert alert-' + (isError ? 'danger' : 'success') + '" style="margin-top: 5px;">' + $('<div/>').text(msg).html() + '</div>');
        }
    };

    $(document).ready(function () {

        $("#feedbackSubmit").click(function () {
            var $btn = $(this);
            $btn.button('loading');
            contactFormUtils.clearErrors();

            //do a little client-side validation -- check that each field has a value and e-mail field is in proper format
            var hasErrors = false;
            $('#feedbackForm input,#feedbackForm textarea').not('.optional').each(function () {
                var $this = $(this);
                if (($this.is(':checkbox') && !$this.is(':checked')) || !$this.val()) {
                    hasErrors = true;
                    contactFormUtils.addError($(this));
                }
            });
            var $email = $('#email');
            if (!contactFormUtils.isValidEmail($email.val())) {
                hasErrors = true;
                contactFormUtils.addError($email);
            }

            //if there are any errors return without sending e-mail
            if (hasErrors) {
                $btn.button('reset');
                return false;
            }

            //send the feedback e-mail
            $.ajax({
                type: "POST",
                url: "php/sendmail.php",
                data: $("#feedbackForm").serialize(),
                success: function (data) {
                    contactFormUtils.addAjaxMessage(data.message, false);
                    contactFormUtils.clearForm();
                },
                error: function (response) {
                    contactFormUtils.addAjaxMessage(JSON.parse(response.responseText), true);
                },
                complete: function () {
                    $btn.button('reset');
                }
            });
            return false;
        });
        $('#feedbackForm input, #feedbackForm textarea').change(function () {
            var checkBox = $(this).siblings('span.input-group-addon').children('.glyphicon');
            if ($(this).val()) {
                checkBox.removeClass('glyphicon-unchecked').addClass('glyphicon-check').css({color: 'green'});
            } else {
                checkBox.removeClass('glyphicon-check').addClass('glyphicon-unchecked').css({color: ''});
            }
        });
    });
})();