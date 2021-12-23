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
- Abrir una consola y cambiar el directorio hacia la carpeta `api` y ejecutar `npm start`
- Abrir una nueva consola y cambiar el directorio hacia la carpeta `client` y ejecutar `npm start`


### Sobre la APP
Es una aplicación en la cual se pueda ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella poder, entre otras cosas:

  - Buscar paises
  - Filtrarlos / Ordenarlos
  - Crear actividades turísticas

# Vista previa

### Pagina Landing

<p align="center">
  <img height="500" src="./images/app-landing.png" />
</p>

### Pagina Home

<p align="center">
  <img height="500" src="./images/app-home.png" />
</p>

### Pagina Details

<p align="center">
  <img height="500" src="./images/app-details.png" />
</p>

### Pagina Create Activity

<p align="center">
  <img height="500" src="./images/app-create.png" />
</p>
