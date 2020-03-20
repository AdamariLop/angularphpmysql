<?php

$conex= mysqli_connect('localhost','root','','bdusuarios');

if (mysqli_connect_error()){
	die('Error al conectarse al servidor de MySQL:' .
	mysqli_connect_error() . '<br> Revisa lo siguiente:
	<br>1. Que ya hayas creado tu base de datos <br>2. Que
	tu nombre de usuario sea correcto <br>3. Que tu
	password sea correcto');
	exit();
}
//se permite usar acentos
if(!mysqli_set_charset($conex,"utf8")){
	echo "Error cargando utf8".mysqli_error($conex);
}
else{
	//echo "Caracteres actualmente ".mysqli_character_set_name($conex);
}
?>