/////CREACION Y ELEIMINACION DE MENSAJES
function ponerMensajeDeError(ErrorAMostrar, NombreDeObjeto) {
    $("#" + NombreDeObjeto).addClass("input-validation-error");
    $("#" + NombreDeObjeto).removeClass("valid");
    $("#" + NombreDeObjeto).attr("aria-required", "true");
    $("#" + NombreDeObjeto).attr("aria-describedby", NombreDeObjeto + "-error");
    $("#" + NombreDeObjeto).attr("aria-invalid", "true");
    $("#" + NombreDeObjeto).parent().children("span").removeClass("field-validation-valid");
    $("#" + NombreDeObjeto).parent().children("span").addClass("field-validation-error");    
    $("#" + NombreDeObjeto).parent().children("span").html("<span id='" + NombreDeObjeto + "-error'>" + ErrorAMostrar + "</span>").css("color", "#b94a48");
}

function sacarMensajeDeError(NombreDeObjeto) {
    $("#" + NombreDeObjeto).removeClass("input-validation-error");
    $("#" + NombreDeObjeto).removeAttr("aria-required");
    $("#" + NombreDeObjeto).removeAttr("aria-describedby");
    $("#" + NombreDeObjeto).removeAttr("aria-invalid");
    $("#" + NombreDeObjeto).parent().children("span").removeClass("field-validation-error");
    $("#" + NombreDeObjeto).parent().children("span").addClass("field-validation-valid");
    $("#" + NombreDeObjeto + "-error").remove();
}
