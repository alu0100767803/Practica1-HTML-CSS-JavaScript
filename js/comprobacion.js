function validar() {

	emailUsuario = getElementByID("email");
	error = true;
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(emailUsuario == null){
		alert("Error");
	}
    if (!expr.test(emailUsuario)){
    	error = false;
    	alert("Error: La dirección de correo " + emailUsuario + " es incorrecta.");
    }
     
	return error;
}