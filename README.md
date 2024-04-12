<h1>Desafío evaluado - Mi Repertorio</h1>
<h2>Paso a Paso</h2>
<p>Este es el primer proyecto en juntar el back-end y el front-end a través de los paquetes de Node y Pg.</p>
<ol>
<li>Preparar espacio de trabajo</li>
<p>El desafío solicita crear una base de datos llamada repertorio. Ahí creamos la tabla 'canciones'</p>
<img src='/img/image.png'>
<p>En el archivo .env ingresamos los datos para conectar a la base de datos 'repertorio' desde node.</p>
<p>Creamos nuestro archivo index.js, una carpeta de views para el archivo html, otra carpeta para las rutas, una con la conexión a la base de datos y otra para las consultas. Instalamos express y pg desde la terminal.</p>
<p>Comprobamos la conexión al puerto:</p>
<img src='/img/image-02.png'>
<figcaption>app.get lo eliminaremos ya que nuestra ruta raíz la llamaremos desde routes.js y ahí insertamos el index.html</figcaption>
<img src='/img/image-03.png'>
<p>Y comprobamos la conexión a la base de datos con 'select now()' y exportamos a consultas:</p>
<img src='/img/image-04.png'>
<figcaption>Esto lo comentamos ya que sólo nos ayuda a comprobar</figcaption>
<li>Ruta Post/CANCION</li>
<p></p>
<li>Ruta GET /canciones</li>
<p>Es la ruta que nos mostrará la data que iremos agregando. Para comprobar insertamos una canción desde DBeaver:</p>
<img src='/img/image-05.png'>
<p>En 'consultas.js' creamos la función 'getData', la cual llamaremos en la ruta de '/canciones', cuyo método es get.</p>
<p></p>
</ol>
