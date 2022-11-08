<?php

$nombre = $_POST['nombre'];
$email  = $_POST['email'];
$telefono = $_POST['tel'];
$mensaje = $_POST['mensaje'];

if (isset($_POST['submit'])){

}
else {
    header("Location:./contacto.html?error");
}


?>

