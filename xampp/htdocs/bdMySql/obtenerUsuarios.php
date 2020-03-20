<?php
//Las siguientes dos lineas es para decirle al sitio que otro sitio web se va a conectar para realizar consultas

	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	require_once("bd.php");
	$sql="SELECT * FROM usuarios"; //Se crea la consulta
	$registros = mysqli_query($conex, $sql); //Se ejecuta la consulta
	while ($resultado = mysqli_fetch_array($registros)){
		$datos[] = $resultado; //Se guardan en un arreglo todos los registros (Es necesario un arreglo para generar el JSON)
	}
	$json = json_encode($datos); //Se genera el json y se guarda en una variable
	echo $json; //Se muestra el json en pantalla
	header('Content-Type: application/json');
?>