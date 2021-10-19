$(function () {
    $("#idFormulario").submit(function (e) {
        e.preventDefault();        
        var result = true;

        if ($('#g-recaptcha-response').val() == "") {
            $("#capchaptObligatorio").show();
            result = false;
        }
        else {
            $("#capchaptObligatorio").hide();
        }
       
        if ($("#UserName").valid() == false) {
            result = false;
        }
        if ($("#Email").valid() == false) {
            result = false;
        }
        if ($("#Password").valid() == false) {
            result = false;
        }
        if ($("#ConfirmPassword").valid() == false) {
            result = false;
        }
        if (result == true) {
            var form = this;
            form.submit();
        }
    });

    $("#UserName").blur(function () {
        $("#UserName").valid();
    });
    $("#Email").blur(function () {
        $("#Email").valid();
    });
    $("#Password").blur(function () {
        $("#Password").valid();
    });
    $("#ConfirmPassword").blur(function () {
        $("#ConfirmPassword").valid();
    });  
});