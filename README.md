# Mi proyecto

Este proyecto es una app creada en react para el curso de React JS de Coder House.

Elegí trabajar con un negocio que pertenece a la familia de mis amigos Dani y Guille, en el que se trabajan diversos rubros (lanas, mercería, librería y juguetería). Me pareció interesante poder manejarme con diversidad de categorías y productos, para poder probar las diferentes funcionalidades que fuimos aprendiendo en el curso.

El sitio se puede visualizar en https://casa-san-martin.netlify.app/.

## Estructura y funcionamiento

El proyecto incluye una home, en la que se muestran todos los productos disponibles, y un menú por categorías.
Al clickear en el producto, se accede al detalle de este; y desde allí se puede agregar al carrito de compras.
En el carrito, se visualizan todos los productos agregados, con sus cantidades y subtotales, y el total de la compra.
El usuario debe cargar sus datos personales, para poder generar la orden.

## Dependencias adicionales

react-router-dom 5.3.0
Esta dependencia permite generar el ruteo en el navegador, convirtiendo el proyecto en una SPA.

Firebase
Este servicio, provisto por Google, permite -entre otras cosas- crear y actualizar bases de datos.
En este proyecto, se utiliza para las BDD de productos y de órdenes de compra.
