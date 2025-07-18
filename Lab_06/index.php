<?php include 'db.php'; ?>

<!DOCTYPE html>
<html lang="es">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
<link rel="stylesheet" href="index.css">

<head>
  <meta charset="UTF-8">
  <title>Registro de Alumnos</title>
</head>

<body>
    <h2>Registro de Alumnos</h2>
    <form action="procesar.php?accion=insertar" method="POST"> <!-- Formulario para registrar alumnos -->

      <!-- Nombre y Apellido -->
      <div>
        <label>Nombre/Apellido:</label>
        <input type="text" name="nombre_apellido">
      </div>
      <!-- Identificación -->
      <div>
        <label>Identificación:</label>
        <input type="id" name="id">
      </div>
      <!-- Correo -->
      <div>
        <label>Correo electrónico:</label>
        <input type="email" name="correo">
      </div>
      <!-- Teléfono -->
      <div>
        <label>Teléfono:</label>
        <input type="numbers" name="telefono">
      </div>
      <!-- Curso -->
      <div>
        <label>Curso:</label>
        <input type="text" name="curso">
      </div>
      <!-- Fecha de Nacimiento -->
      <div>
        <label>Fecha de nacimiento:</label>
        <input type="date" name="fecha_nacimiento">
      </div>
      <!-- Botón para enviar el formulario -->
      <button type="submit">Enviar</button>
      <!-- Botón para enviar el formulario se encargar de disparar la informacion -->
    </form>

    <table>
      <thead>
        <tr>
          <th>Nombre/Apellido</th>
          <th>ID</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Curso</th>
          <th>Fecha de Nacimiento</th>
          <th>Fecha de Registro</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <?php // stmt es una variable que contiene la consulta a la base de datos statement
          $stmt = $pdo->query("SELECT * FROM alumnos ORDER BY nombre_apellido DESC"); // Consulta para obtener los alumnos registrados
          while($row = $stmt->fetch(PDO::FETCH_ASSOC)) { // fetch asocia los resultados a un array asociativo
            echo "<tr>
                    <td>".htmlspecialchars($row['nombre_apellido'])."</td>
                    <td>".htmlspecialchars($row['id'])."</td>
                    <td>".htmlspecialchars($row['correo'])."</td>
                    <td>".htmlspecialchars($row['telefono'])."</td>
                    <td>".htmlspecialchars($row['curso'])."</td>
                    <td>".htmlspecialchars($row['fecha_nacimiento'])."</td>
                    <td>{$row['fecha_registro']}</td>
                    <td>
                      <a href='procesar.php?id={$row['id']}&accion=actualizar' title='Actualizar' class='btn-actualizar'><i class='fas fa-sync-alt'></i></a> |
                      <a href='procesar.php?id={$row['id']}&accion=eliminar' title='Eliminar' class='btn-eliminar'><i class='fa-solid fa-circle-xmark'></i></a>
                  </tr>";
          } // htmlspecialchars previene ataques XSS al escapar caracteres especiales como <, >, &, etc.
        ?>
      </tbody>
    </table>
</body>
</html>