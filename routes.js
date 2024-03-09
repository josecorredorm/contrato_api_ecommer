//Rutas publicas

//POST /registro
request:
        payload:{
            email: String;
            nombre_usuario: String;
            nombre_completo: String;
            password: String;
        }
        Response:{
            statusCode: Number;
            msg: String;
        }
//POST /login
request:
        payload:{
            email: String;
            password: String;
        }
        Response:{
            statusCode: Number;
            token: String;
            usuario:{
                id: Number;
                nombre_completo: String;
                rol: String;
            }
        }
//GET /productos
request:
        payload:{
            limit: Number;
            page: Number;
        }
        Response:
        {
            productos:[
                {
                id: Number,
                nombre: String,
                descripcion: String,
                precio: Number,
                stock: Number,
                categoria: String,
                fecha: String    
                }
            ]
        }

//GET /productos/$id
request:
        payload:{
            id: Number;
        }
        Response:
        {
            productos:                
            {
                id: Number;
                nombre: String;
                descripcion: String;
                precio: Number;
                stock: Number;
                categoria: String;
                fecha: String;    
            }
        }

//GET /productos/filtros

request:
        payload:
        {
            precio_min: Number;
            precio_max: Number;
            categoria: String;
        }
        Response:
            {
                productos:[{
                    id: Number,
                    nombre: String,
                    descripcion: String,
                    precio: Number,
                    stock: Number,
                    categoria: String,
                    fecha: String
                }]
            }


//GET /carrito/$id
request:
        payload:
        {
            id_carrito: Number;
        }
        Response:
        {
            productos:
                [{
                    id: Number,
                    nombre: String,
                    cantidad: Number,
                    precio: Number,
                }]
        }

//POST /carrito/add/$id
request:
        payload:
        {
            id_carrito: Number;
            producto:{
                id: Number;
                cantidad: Number;
            }
        }
        Response:{
            statusCode: Number;
            msg: String;
        }

//PUT /carrito/act/%id
request:
        payload:
        {
            id_carrito: Number;
            producto:{
                id: Number;
                cantidad: Number;
            }
        }
        Response:{
            statusCode: Number;
            msg: String;
        }
//DELETE /carrito/delete/$id
request:
        payload:
        {
            id_carrito: Number;
            id_producto: Number;
        }
        Response:{
            statusCode: Number;
            msg: String;
        }

//Rutas privadas

//POST /productos/agregar
request:
        payload:
        {
            token: String;
            rol: String;
            producto:{
                id: Number;
                nombre: String;
                descripcion: String;
                precio: Number;
                stock: Number;
                categoria: String;
                img: String; 
            }
        }
        Response:{
            statusCode: Number;
            msg: String;
        }
//DELETE /productos/delete/$id
request:
        payload:
        {
            token: String;
            rol:String;
            id_producto: Number;
        }
        Response:{
            statusCode: Number;
            msg: String;
        }

//PUT /producto/act/$id
request:
        payload:
        {
            token: String;
            rol:String;
            id_producto: Number;
            producto:{
                nombre: String;
                descripcion: String;
                precio: Number;
                stock: Number;
                categoria: String;
                img: String; 
            }
        }
        Response:{
            statusCode: Number;
            msg: String;
        }

//PUT /producto/perfil/$id
request:
        payload:
        {
            token: String;
            rol:String;
            id: Number;
            usuario:{
                nombre_completo: String;
                contraseña: String;
            }
        }
        Response:{
            statusCode: Number;
            msg: String;
        }