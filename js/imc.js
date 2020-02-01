'use strict'
window.addEventListener('load',function(){
	var formulario = document.querySelector("#formulario");
	var resultados = document.querySelector(".resultados");
	resultados.style.display = "none"; 
	formulario.addEventListener('submit',function(){

		console.log("Evento submit capturado");
		
	var estatura = parseFloat(document.querySelector("#estatura").value);
	var peso = parseFloat(document.querySelector("#peso").value);

	if(estatura ==null || estatura<=60 || isNaN(estatura) )
		{
			document.querySelector("#error_estatura").innerHTML = "La estatura no es valida";
			return false;
		}
		else{
			document.querySelector("#error_estatura").style.display = "none";

		}

		if(peso ==null || peso<=0 || isNaN(peso))
		{
			document.querySelector("#error_peso").innerHTML = "El peso no es valido ";
			return false;
		}
		else{
			document.querySelector("#error_peso").style.display = "none";

		}

		resultados.style.display = "block";

	var p_imc = document.querySelector("#p_imc span");
	var p_mensaje = document.querySelector("#p_mensaje");
	var mensaje;

	estatura = estatura/100;
	var final = (peso/(estatura*estatura)).toFixed(2);
		if(final>40)
		{
 			mensaje = "Presentas obesidad morbida";
		}	
		if(final<=40 && final> 30)
		{
 			mensaje = "Presentas obesidad severa";
		}
		if(final>=25 && final<30)
		{
 			mensaje = "Presentas sobrepeso";
		}
			if(final>=18.5 && final< 25)
		{
 			mensaje = "Tu peso es saludable";
		}
			if(final>=16 && final< 18.5)
		{
 			mensaje = "Presentas delgadez";
		}
			if(final<16 && final>= 15)
		{
 			mensaje = "Presentas delgadez severa";
		}
			if(final<15)
		{
 			mensaje = "Presentas delgadez muy severa";
		}
	p_imc.innerHTML = final;
	p_mensaje.innerHTML = mensaje;
});
});