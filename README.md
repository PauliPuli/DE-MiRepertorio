<h1>Desafío evaluado - Mi Repertorio</h1>
<h2>Paso a Paso</h2>
<p>Este es el primer proyecto en juntar el back-end y el front-end a través de los paquetes de Node y Pg.</p>

<h3>Preparar espacio de trabajo</li>
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
<ol>
<h3><li>Ruta POST/cancion</li></h3>
<p>Esta función usa el método post, y al crear la ruta comprobamos por la consola si agrega un nuevo objeto:</p>
<img src='/img/image-06.png'>
<li>Ruta GET /canciones</li>
<p>Es la ruta que nos mostrará la data que iremos agregando. 
<p>En 'consultas.js' creamos la función 'getData', la cual llamaremos en la ruta de '/canciones' con el método get.</p>
<img src='/img/image-07.png'>
<figcaption>Olvidé actualizar la página y cuando agregué la canción noté que fue enviada 2 veces. Esto quiere decir que funcionan ambas rutas.</figcaption>
<img src='/img/image-08.png'>
<figcaption>Agregamos una canción más para actualizar la base de datos.</figcaption>
<h3><li>Ruta PUT/cancion</li></h3>
<img src='/img/image-09.png'>
<figcaption>Intenté editar el tono de una de las canciones llamadas Tusa, pero no hubo cambios, ¿por qué.</figcaption>
<img src='/img/image-10.png'>
<p>En la función estoy solicitando que capture el id por el url, a diferencia de 'titulo, artista, tono' que son tomados desde el cuerpo del servidor:</p>
<img src='/img/image-11.png'>
<p>Nos faltó un detalle:</p>
<img src='/img/image-12.png'>
<p>Ahora vamos al navegador a editar una de las canciones repetidas y obtenemos:</p>
<img src='/img/image-13.png'>
<figcaption>¡Listo!Podemos editar cualquier canción del listado.</figcaption>
<h3><li>Ruta DELETE /cancion</li></h3>
<img src='/img/image-14.png'>
</ol>
