                                                              FANQUOT

                                        -  Project-Break-Javier-Garcia-Alvarez- FULLSTACK  -



FanQuot es una Red Social que permite explorar, crear y gestionar "cards" con frases o citas famosas de personajes ficticios (o reales) de distintos tipos de medios como películas, series, libros o videojuegos.
Los usuarios pueden buscar citas, crear sus propias cards y votar sus favoritas, mientras que el administrador tiene permisos especiales para gestionar el contenido.



Tecnologías utilizadas:


-- FRONTEND

React (Javascript)

Vite

CSS

Vercel


-- BACKEND

Node.js

Express

MongoDB Atlas

Render

____________________________________________________________________________________________________________________________________


El proyecto está dividido en dos repositorios de GitHub (https://github.com/javigarcial87-ops?tab=repositories)


-- FRONTEND/   → React + Vite            https://github.com/javigarcial87-ops/frontend-project-break-fanquot

-- BACKEND/    → Node.js + Express       https://github.com/javigarcial87-ops/backend-project-break-fanquot



-- LINKS DEPLOY --


-- Vercel frontend DEPLOY: 
https://frontend-project-break-fanquot.vercel.app/

-- Render backend DEPLOY:
https://backend-project-break-fanquot.onrender.com


______________________________________________________________________________________________________________________________________



--------------------- FUNCIONALIDADES -------------------------------------------

La aplicación mostrará una colección de cards disponibles en la Home y un destacado en su encabezado que muestra la card más votada, según el número de likes de los usuarios registrados.
Cuenta también con un input de busqueda para buscar cards según el nombre de personaje o título de medio donde aparece tal personaje y poder explorar el contenido de la página.

Cada "Card" cuenta con la siguiente información:

- Nombre del personaje

- Imagen del personaje

- Tipo de medio (película (MOVIE), serie (TV), libro (BOOK) o videojuego (GAMING))

- Título del medio donde aparece el personaje

- Frase o cita famosa del personaje

- Contador con likes totales de la card, recibidos por los usuarios registrados en la página

- Botón de "Me gusta" para dar like a la card (solo funcional al estar registrado y logeado)

- Un sistema de paginación simple al final de la lista de cards de la Home, para navegar manualmente por el contenido.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


AUTENTIFICACIÓN

* Administrador
* Usuario



--------------------------------------                ROLES                 ----------------------------------------------------------------------------------------------------


__________________________________________________________________________________________

-- VISITANTE O invitado (GUEST) --

Accede a la pagina mediante un link y en la Home puede ver las cards que hay hasta el momento, en el input de busqueda, buscar según nombre de personaje o título de medio, o mediante
las flechas de paginación, explorar el contenido disponible.

_________________________________________________________________________________________


-- USUARIO --

-Usuario, una vez registrado y logeado:

-En el navbar aparece un saludo junto al nombre de usuario y puede:

-Dar like a las cards.

-Acceso al formulario de creación.

-Un menú "Mi perfil" en el navbar, donde aparecen guardadas las cards a las que el usuario haya dado "Me gusta" y un registro
  de las cards que dicho usuario haya creado.



-- EL FORMULARIO DE CREACIÓN --

(donde el usuario puede crear mediante inputs las cards), (limitación de creación de número de cards por usuario (...WORK IN PROGRESS...)) --

-Nombre del personaje

-Imagen del personaje (subida provisional mediante URL, subidas de archivos de imágen en local o cloudinary (...WORK IN PROGRESS...) )

-Selector del tipo de medio (MOVIE(cine), TV(televisión o programas televisivos), GAMING(juegos o multimedia) y BOOK(Medios físicos: Libros,comics...etc))

-Título del medio donde aparece el personaje

-Frase o cita famosa del personaje

-Boton "crear card"

-Al pulsar botón "Crear card":

  --Se crea/n un/as nueva/s card/s en la Home (La/s última/s card/s creada/s aparecerá/n la/s primera/s en orden de creación).

  --Se guardará la información de la/s card/s creada/s en la base de datos principal (MongoDB Atlas).

____________________________________________________________________________________________________________________________________________________________________________________________________


*-- ADMINISTRADOR

-Administrador logeado mediante credenciales específicas, puede acceder a propiedades exclusivas y tener un control total del contenido de la aplicación.

-El administrador al logarse:

- Accede a un "Panel de administrador" donde:
  Aparecerá un input de búqueda que al escribir el nombre o título del medio, aparecerá una lista de coincidencias disponibles, y mostrará las cards que coincidan con su busqueda
  mostrando:

  -El nombre del personaje
  -Titulo del medio donde aparece el personaje
  -Fecha en la que se creó la card 
  -Nombre del usuario que creó la card (...WORK IN PROGRESS...)

-Cada elemento mostrado en esa lista, tiene un botón de ELIMINAR y EDITAR.

-Al pulsar ELIMINAR:
  La card se elimina permanentemente de la página y de la base de datos.

-Al pulsar EDITAR: 
  Se accede al formulario "Editar Card" (parecido al formulario de creación, pero con los datos de la card que queremos modificar ya incluidos en los inputs), donde podemos modificar los datos de la card y luego pulsando el botón "Guardar cambios", guardaremos la card en la Home, con los cambios que se hayan realizado.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-- EL SÍSTEMA DE LIKES --

-Cada card de la Home, tiene un contador con el numero total de likes acumulados que esa card ha recibido por parte de todos los usuarios registrados en la página.

 También cuenta con un boton de "Me gusta", para votar.

- RECUERDA: El botón "Me gusta" solo es funcional al estar registrado y logeado.

-Cada usuario registrado y logeado, solo puede votar "Me gusta" una vez por cada card. 
 Sí al pulsar una segunda vez el boton de "Me gusta" sobre la misma card que ese usuario logeado ya votó, eliminará su voto, y eliminará tambien esa card guardada en el apartado 
 "Mi perfíl".

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Ejemplo de estructura de una card (MongoDB)

{
  "characterName": "Gandalf",
  "characterImage": "https://...",
  "mediaType": "movie",
  "mediaTitle": "The Lord of the Rings",
  "quote": "A wizard is never late, nor is he early. He arrives precisely when he means to.",
  "likes": 120,
  "createdBy": "userId",
  "createdAt": "2026-03-15"
}

ENDPOINTS del backend  
Cards
GET /cards
GET /cards/search
POST /cards
DELETE /cards/:id
PUT /cards/like/:id
Auth
POST /auth/login
POST /auth/register
POST /auth/logout


Autor: Javier García Álvarez
