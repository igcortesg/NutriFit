# NutriFit

<div align="center">

[![css3-badge-sm]][css3-web] [![figma-badge-sm]][figma-web] [![git-badge-sm]][git-web] [![github-badge-sm]][github-web] [![html5-badge-sm]][html5-web] [![js-badge-sm]][js-web]  [![vscode-badge-sm]][vscode-web]

</div>

## Descripción
El proyecto de NutriFit se basa en desarrollar una aplicación móvil que ayude a los usuarios a realizar un seguimiento a las comidas que consumen y a las actividades físicas realizadas, permitiendo una visualización clara de las calorías consumidas y gastadas diaramente. La aplicación facilita la visualización de tendencias relacionadas con el peso, datos personales y el balance calórico diario según la información que ingresa el usuario.

**Link del proyecto:** https://github.com/igcortesg/NutriFit
## Instrucciones de ejecución
- Ingresar a la rama llamada "ionic"
- Una vez abierto, ejecutar el cluster de MongoDB usando el siguiente string de conexión: mongodb+srv://igcortes8:8x5Sp7yuKP07LFrd@cluster0.wkyspx9.mongodb.net/NutriFit?retryWrites=true&w=majority
- En el terminal, abrir command prompt y desde la carpeta raíz acceder a la carpeta "backend", luego acceder a la carpeta "src" y ejectutar: node server.js
- Para ejecutar el FrontEnd, en el terminal, abrir command prompt y desde la carpeta raíz acceder a la carpeta "NutriFit" y ejecutar: ionic serve
- Correo de prueba: ejemplo@ejemplo.com
- Contraseña de prueba: ejemplo
## Funcionalidades
### 1. Registro de Alimentos Consumidos:
- Esta funcionalidad permite a los usuarios visualizar los alimentos que consumen a lo largo del día.
- Los usuarios deben seleccionar la fecha del día que quieren ver su ingesta calórica diaria.
- La información registrada se muestra en una tabla en la pantalla "Mis Comidas", donde los usuarios pueden ver un resumen de su ingesta calórica diaria, detallando el alimento consumido, la cantidad de gramos y las calorías totales.
### 2. Registro de Actividades Físicas:
-	Permite a los usuarios visualizar las actividades físicas que realizan durante el día.
-	Los usuarios deben seleccionar la fecha del día que quieren ver su gasto calórico diario.
-	La información registrada se muestra en una tabla en la pantalla "Mis Actividades", donde los usuarios pueden ver un resumen de su actividad física diaria, detallando la actividad realizada, la cantidad de minutos en actividad y las calorías quemadas totales.
### 3.	Análisis de Tendencias de Peso:
-	Esta funcionalidad proporciona a los usuarios una visión general de su progreso de pérdida o ganancia de peso a lo largo del tiempo.
-	Utilizando los datos de peso ingresados en el perfil del usuario, NutriFit muestra estadísticas que muestran la tendencia de peso a lo largo del tiempo.
-	El usuario debe ingresar un intervalo de tiempo, con una fecha de inicio y una fecha de termino, para luego mostrar un resumen de las calorías consumidas, calorías quemadas, balance calórico y su tendencia a la alza o baja de peso.
### 4.	Buscar y Registrar Nuevas Actividades Físicas:
-	Permite a los usuarios buscar y registrar nuevas actividades físicas realizadas.
-	Los usuarios pueden seleccionar el tipo de actividad de un menú desplegable, ingresar la cantidad de minutos dedicados y guardar la información.
-	Esta funcionalidad facilita el registro rápido y sencillo de nuevas actividades físicas en la aplicación.
### 5.	Buscar y Registrar Nuevas Comidas:
-	Permite a los usuarios buscar y registrar nuevas comidas consumidas.
-	Los usuarios pueden seleccionar el tipo de comida de un menú desplegable, ingresar la cantidad en gramos y guardar la información.
-	Esta funcionalidad facilita el registro rápido y sencillo de nuevas comidas en la aplicación.

## Prototipo

<div align="center">

[![figma-prot-badge]][figma-prot-url] [![figma-dis-badge]][figma-dis-url]

</div>

## Archvivos del proyecto

El proyecto contiene los siguientes archivos:


- index.html: Página HTML principal de la aplicación, incluye el balance calórico del usuario.
- actividadFisica.html: Página HTML para visualizar el registro de actividades físicas.
- nuevaActividad.html: Página HTML para agregar nuevas actividades físicas.
- misComidas.html: Página HTML para el visualizar el registro de comidas.
- nuevaComida.html: Página HTML para agregar nuevas comidas.
- miPerfil.html: Página HTML que muestra el perfil del usuario.
- login.html: Página HTML para el inicio de sesión y registro de usuario con validación de formulario.
- script.js: Archivo JavaScript que proporciona la funcionalidad y la lógica de la aplicación.
- styles.css: Archivo CSS que proprociona los estilos utilizados en la aplicación.

## Estructura de la Base de Datos

En el desarrollo de nuestra aplicación de nutrición, hemos decidido optar por una base de datos NoSQL debido a varias razones que se alinean con nuestros objetivos y requisitos técnicos. A continuación, detallamos los motivos de esta elección:
1. Flexibilidad de Esquema :
La aplicación de nutrición maneja una variedad de datos que incluyen usuarios, recetas, ingredientes, planes de dieta y más. Estos datos pueden tener estructuras que evolucionan con el tiempo. Las bases de datos NoSQL, como MongoDB, permiten la flexibilidad necesaria para modificar el esquema de datos sin interrumpir el servicio. Esta característica es crucial cuando se espera que el modelo de datos cambie con frecuencia debido a la incorporación de nuevas características y ajustes basados en el feedback del usuario.
2. Datos en Formato JSON :
El uso de JSON como formato de datos es una práctica común en las aplicaciones web modernas debido a su simplicidad y compatibilidad con JavaScript y otros lenguajes de programación. Las bases de datos NoSQL, especialmente las basadas en documentos como MongoDB, almacenan los datos en formato JSON o BSON (una versión binaria de JSON). Esto facilita la integración directa con nuestro frontend desarrollado en Angular, que también maneja datos en formato JSON. La consistencia en el formato de datos simplifica el desarrollo y reduce la necesidad de transformación de datos.
3. Escalabilidad Horizontal :
A medida que nuestra base de usuarios crezca, necesitaremos una solución que pueda escalar eficientemente. Las bases de datos NoSQL están diseñadas para escalar horizontalmente, distribuyendo la carga de trabajo entre múltiples servidores. Esto es particularmente útil para manejar grandes volúmenes de datos y altas tasas de transacciones, garantizando que nuestra aplicación mantenga un rendimiento óptimo incluso durante picos de uso.
4. Rendimiento y Disponibilidad :
Las bases de datos NoSQL están optimizadas para operaciones de lectura y escritura rápidas, lo que es esencial para proporcionar una experiencia de usuario fluida. Además, estas bases de datos suelen ofrecer alta disponibilidad y tolerancia a fallos mediante la replicación de datos en varios nodos. Esto asegura que la aplicación sea resistente y minimiza el tiempo de inactividad en caso de fallos del sistema.
5. Modelado de Datos Flexibles :
En nuestra aplicación, los datos de planes de dieta pueden tener una estructura variable. Por ejemplo, un plan de dieta puede contener una lista de comidas que varía en tamaño y complejidad. Las bases de datos NoSQL permiten almacenar estos datos de forma flexible sin la rigidez de un esquema predefinido. Esto permite a los desarrolladores adaptarse rápidamente a nuevos requisitos sin la necesidad de realizar costosas migraciones de esquema.
6. Eficiencia en el Desarrollo :
El desarrollo ágil es un objetivo clave para nuestro equipo. Las bases de datos NoSQL permiten a los desarrolladores trabajar con modelos de datos más intuitivos y naturales, como documentos JSON, lo que reduce la complejidad y acelera el desarrollo. Además, muchas bases de datos NoSQL proporcionan APIs amigables y herramientas que facilitan la gestión y consulta de datos.
7. Manejo de Datos Semiestructurados :
La aplicación necesita manejar datos semiestructurados y anidados, como los ingredientes de una receta o los pasos detallados para su preparación. Las bases de datos NoSQL son ideales para este tipo de datos, permitiendo anidación y estructuras complejas dentro de un solo documento. Esto contrasta con las bases de datos relacionales que requieren múltiples tablas y uniones para lograr lo mismo, lo que puede ser menos eficiente y más complejo de manejar.

Descripción de nuestra base de datos

Para nuestra de base noSQL utilizaremos colecciones y documentos los cuales los separemos de esta forma:


miPerfil: En nuestra aplicación cada usuario contiene un perfil con toda su información personal más relevante. Contendrá el id del usuario con su respectiva contraseña, también contiene el rut, peso corporal, altura, correo electrónico y lugar donde reside(Comuna y Región). 

Actividad: En esta colección se almacenarán toda la información sobre las actividades que el usuario debe realizar, como lo son todos los ejercicios físicos. En esta colección se encontrará el id de la actividad, el id del usuario, las actividad con su respectiva duración,y también las calorías totales que se deberían quemar por todas cada actividad.

Comidas: Cada usuario tiene la capacidad para registrar todas sus comidas. Para gestionar esta información, utilizaremos una colección dedicada a las comidas, esta colección contendrá el id del usuario, las calorías totales y las proteínas totales.


![db2](https://github.com/igcortesg/NutriFit/assets/56361998/b53edb62-02ce-4f7b-b8ab-672498670326)




## Patrones de diseño
En el desarrollo de nuestra aplicación hemos implementado diversos patrones de diseño móvil para mejorar la experiencia del usuario y la usabilidad de la aplicación. Los patrones de diseño seleccionados permiten una navegación intuitiva y una interacción eficiente con la aplicación. A continuación, se detallan los patrones de diseño aplicados: el patrón de lectura en "F" y "Bottom Navigation". Se explicará cómo fueron integrados en las distintas pantallas de la aplicación y cómo contribuyen a la funcionalidad general

### Patrón de Lectura en F
El patrón de lectura en "F" es un diseño que guía al usuario a través del contenido de una manera lógica y natural. Este patrón se ha aplicado en las pantallas de "Registro de Comidas" y "Registro de Actividad Física". A continuación, se detalla cómo se ha implementado este patrón en cada una de estas pantallas.
#### Registro de comidas: 
- La pantalla comienza con el título "Registro de Comidas" en la parte superior, lo que proporciona al usuario un contexto claro sobre la función de la página.
- Directamente debajo del título, se presenta un calendario que permite al usuario seleccionar la fecha para la cual desea registrar la comida ingerida.
- Luego del calendario, se encuentra un campo para que el usuario elija el alimento que ha consumido.
- A continuación, se dispone de un campo de entrada donde el usuario puede ingresar la cantidad en gramos del alimento seleccionado.
- Finalmente, en la parte inferior, se encuentra un botón que permite al usuario agregar el registro de la comida.

#### Registro de Actividad Física
- Similarmente, esta pantalla comienza con el título "Registro de Actividad Física".
- Debajo del título, se encuentra un calendario para seleccionar la fecha de la actividad realizada.
- Luego del calendario, se presenta un campo para que el usuario elija el tipo de actividad física realizada.
- A continuación, se dispone de un campo de entrada donde el usuario puede ingresar la duración de la actividad en minutos.
- En la parte inferior, se encuentra un botón para agregar el registro de la actividad física.

### Bottom Navigation
El patrón "Bottom Navigation", es una barra de navegación ubicada en la parte inferior de la pantalla. Esta barra contiene iconos que permiten al usuario moverse rápidamente entre las principales secciones de la aplicación. En nuestra aplicación, hemos implementado cuatro botones en esta barra: Inicio, Mis Comidas, Actividad Física y Mi Perfil.

- Inicio: El primer botón lleva al usuario a la pantalla principal de la aplicación, donde puede ver un resumen de sus registros y estadísticas.
- Mis Comidas: El segundo botón redirige a la pantalla de "Registro de Comidas", permitiendo al usuario agregar y revisar los registros de alimentos consumidos.
- Actividad Física: El tercer botón lleva a la pantalla de "Registro de Actividad Física", donde el usuario puede registrar y revisar sus actividades físicas.
- Mi Perfil: El cuarto botón dirige a la pantalla del perfil del usuario, donde se pueden gestionar configuraciones personales y estadísticas personales.





## Integrantes

- Ignacio Cortés González
- Eduardo Marin Avalos
- Fernando Melillán Torrecilla

[js-badge-sm]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat
[js-web]: https://developer.mozilla.org/es/docs/Web/JavaScript
[ts-badge-sm]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat
[ts-web]: https://www.typescriptlang.org/
[html5-badge-sm]: https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat
[html5-web]: https://developer.mozilla.org/es/docs/Web/HTML
[css3-badge-sm]: https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat
[css3-web]: https://developer.mozilla.org/es/docs/Web/CSS
[tailwind-badge-sm]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=fff&style=flat
[tailwind-web]: https://tailwindcss.com/
[react-badge-sm]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=fff&style=flat
[react-web]: https://reactjs.org/
[angular-badge-sm]: https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=fff&style=flat
[angular-web]: https://angular.io/
[nodejs-badge-sm]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=fff&style=flat
[nodejs-web]: https://nodejs.org/
[express-badge-sm]: https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat
[express-web]: https://expressjs.com/
[mongodb-badge-sm]: https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat
[mongodb-web]: https://www.mongodb.com/
[postgresql-badge-sm]: https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=fff&style=flat
[postgresql-web]: https://www.postgresql.org/
[mysql-badge-sm]: https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat
[mysql-web]: https://www.mysql.com/
[git-badge-sm]: https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat
[git-web]: https://git-scm.com/
[github-badge-sm]: https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff&style=flat
[github-web]: https://github.com
[npm-badge-sm]: https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat
[npm-web]: https://www.npmjs.com/
[yarn-badge-sm]: https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=flat
[yarn-web]: https://yarnpkg.com/
[prettier-badge-sm]: https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat
[prettier-web]: https://prettier.io/
[eslint-badge-sm]: https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat
[eslint-web]: https://eslint.org/
[vscode-badge-sm]: https://img.shields.io/badge/Visual_Studio_Code-007ACC?logo=visual-studio-code&logoColor=fff&style=flat
[vscode-web]: https://code.visualstudio.com/
[ionic-badge-sm]: https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=fff&style=flat
[ionic-web]: https://ionicframework.com/
[figma-badge-sm]: https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-web]: https://www.figma.com/
[ios-development-badge-sm]: https://img.shields.io/badge/iOS_Development-000000?logo=ios&logoColor=fff&style=flat
[ios-development-web]: https://developer.apple.com/ios/
[android-development-badge-sm]: https://img.shields.io/badge/Android_Development-3DDC84?logo=android&logoColor=fff&style=flat
[android-development-web]: https://developer.android.com/

[figma-prot-badge]: https://img.shields.io/badge/Ver%20prototipo%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-prot-url]: https://www.figma.com/file/IWlMFLFjRW6zUzQR6zs2jw/Ing-Web?type=design&node-id=1%3A241&mode=design&t=358ZMwFqkLei6n7p-1
[figma-dis-badge]: https://img.shields.io/badge/Ver%20diseño%20UI%20en%20Figma-F24E1E?logo=figma&logoColor=fff&style=flat
[figma-dis-url]: https://www.figma.com/proto/IWlMFLFjRW6zUzQR6zs2jw/Ing-Web?node-id=41-2416&starting-point-node-id=41%3A2416&t=MhtGwFq0V2U94tYA-1&mode=design
