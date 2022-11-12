Para crear el backend se utilizó express en donde se utilizaron dependencias para permitir el acceso de los endpoints como cors y también se establece la conexión a la base de datos proporcionada.

Dentro del backend están creadas las rutas dentro de la carpeta rutas de las peticiones que se harán desde el cliente al servidor. Para este proyecto se utilizaron dos rutas diferentes para crear la rest API, una para los productos y otra para las categorías

Por otra parte, dentro de la carpeta controllers, se encuentran las funciones que se utilizarán para las distintas peticiones: 
    - En el caso de las categorías solo hay una petición, la cual devuelve todas las categorías que existen en la db.
    - En el caso de los productos, existen 3 funciones:

    getProducts: Devuelve todos los productos, sin embargo, devuelve una cantidad limitada por el cliente, debido a que esto se utilizará para hacer la paginación.
    getProduct: Es una función que devuelve los productos que son requeridos en el buscador del cliente.
    getProductById: Devuelve los productos según la categoría seleccionada, también con limitaciones en la entrega de los productos para realizar la paginación en el cliente.