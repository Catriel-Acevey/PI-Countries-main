<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Countries-App

Esto es un proyecto académico que hice como parte de nuestra educación en [Soy Henry](https://www.soyhenry.com/), que consistió en crear una full-stack React application desde cero.

<p align="left">
  <img height="200" src="./images/countries.png" />
</p>

## Tecnologías usadas

- Front End:
    + HTML - CSS - Javascript
    + React
    + Redux

- Back End:
    + Node.js
    + Express
    + Sequelize

- Database: 
    + PostgreSQL


# Como iniciar el proyecto

 - Clonar el repositorio en su computadora
 - Tener instalado [Node](https://nodejs.org/es/), [NPM](https://www.npmjs.com/) y [PostgreSQL](https://www.postgresql.org/)
 - En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost

```
- Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres.
- Crear desde psql una base de datos llamada `countries` con el comando `CREATE DATABASE countries`
- Abrir una consola, cambiar el directorio hacia la carpeta `api`, ejecutar `npm install` y una ves finalizada la instalacion ejecutar `npm start`
- Abrir una nueva consola, cambiar el directorio hacia la carpeta `client`, ejecutar `npm install` y una ves finalizada la instalacion ejecutar `npm start`




# Vista previa

### Pagina Landing

<p align="center">
  <img src="./images/app-landing.png" />
</p>

### Pagina Home

<p align="center">
  <img src="./images/app-home.png" />
</p>

### Pagina Details

<p align="center">
  <img src="./images/app-details.png" />
</p>

### Pagina Create Activity

<p align="center">
  <img src="./images/app-create.png" />
</p>

# Descripción Técnica

Tengo un `boilerplate` con la estructura general tanto del servidor como de cliente.
El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

### Sobre la APP
Es una aplicación en la cual se pueda ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella poder, entre otras cosas:

  - Buscar paises
  - Filtrarlos / Ordenarlos
  - Crear actividades turísticas

### Frontend

Es una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: es una landing page con
- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar países por nombre
- [ ] Área donde se verá el listado de países. Al iniciar carga los primeros resultados obtenidos desde la ruta `GET /countries` y muestra su:
  - Imagen de la bandera
  - Nombre
  - Continente
- [ ] Opciones para filtrar por continente y por tipo de actividad turística
- [ ] Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 9 paises por pagina.

__Ruta de detalle de país__: contiene
- [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [ ] Código de país de 3 letras (id)
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrada en km2 o millones de km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__: contiene
- [ ] Un formulario controlado con los siguientes campos
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultaneo
- [ ] Botón para crear una nueva actividad turística

### Base de datos

El modelo de la base de datos tiene las siguientes entidades (Aquellas propiedades marcadas con asterísco son obligatorias):

- [ ] País con las siguientes propiedades:
  - ID (Código de 3 letras) *
  - Nombre *
  - Imagen de la bandera *
  - Continente *
  - Capital *
  - Subregión
  - Área
  - Población
- [ ] Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

La relación entre ambas entidades es de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países.

### Backend

Es un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No utilice los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades son implementadas.

- [ ] __GET /countries__:
  - En una primera instancia trae todos los países desde restcountries y los guarda en mi propia base de datos para luego ya utilizarlos desde allí
  - Obtiene un listado de los paises.
- [ ] __GET /countries/{idPais}__:
  - Obtiene el detalle de un país en particular
  - Trae solo los datos pedidos en la ruta de detalle de país
  - Incluye los datos de las actividades turísticas correspondientes
- [ ] __GET /countries?name="..."__:
  - Obtiene los países que coincidan con el nombre pasado como query parameter (No necesariamente es una matcheo exacto)
- [ ] __POST /activity__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos
