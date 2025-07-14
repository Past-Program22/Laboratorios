<?php
include 'db.php';

$nombre = trim($_POST['nombre'] ?? ''); // Recibimos por medio del metodo POST el nombre del alumno
$correo = trim($_POST['correo'] ?? ''); // POST se utiliza cuando se quiere alterar datos en el servidor

$errores = []; // Array para almacenar errores de validación
if ($nombre === '')  $errores[] = 'El nombre es obligatorio.'; // Validamos que el nombre no esté vacío
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) $errores[] = 'Correo inválido.'; // Validamos que el correo tenga un formato válido

// Esta negado la variable $errores, si no hay errores, se procede a insertar el registro
if (count($errores) > 0) {
  // for each se utiliza para recorrer el array de errores
  foreach ($errores as $err) {
    echo "<p style='color:red;'>$err</p>";
  }
  echo "<p><a href='index.php'>Volver</a></p>";
  exit;
}

$sql  = "INSERT INTO alumnos (nombre, correo) VALUES (:nombre, :correo)"; // En values los : son marcadores de posición para evitar inyecciones SQL, eso quiere decir que los valores se asignan de forma segura.
$stmt = $pdo->prepare($sql);
$stmt->execute([':nombre' => $nombre, ':correo' => $correo]);

header('Location: index.php'); // Redirigimos al usuario a la página principal después de insertar el registro
exit;
?>