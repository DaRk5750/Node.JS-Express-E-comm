import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session  from 'express-session';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';

import userRoute from './src/users/controller/user.route.js'
import productRoute from './src/products/controller/product.route.js';
import jwtAuth from './src/middlewares/session.middleware.js';


const server = express();

//SESSION
server.use(session({ secret:'SecretKey', resave: false, saveUninitialized: true, cookie:{secure:false} }))

//make page visible to everyone public views
server.use(express.static("public"));

//FORM DATA POST
server.use(express.urlencoded({extended: true}));   // parse form data
// server.use(express.json())
// server.use(cookieParser());
// server.use(bodyParser.json());

//Set Templates
server.set("view engine", "ejs");                                               // define template engine 
// server.set("views", path.join(path.resolve(), 'src','users' ,'views'));             // paths
server.use(ejsLayouts);                                                         // base template
// You can also set multiple views paths for different routes if needed
server.set('views', [path.join(path.resolve(), 'src', 'users', 'views'), path.join(path.resolve(), 'src', 'products', 'views')]);


server.get('/',(req, res ,next) =>{
    res.send("This is Testing");
})

server.use('/user',userRoute);
server.use('/product',jwtAuth, productRoute);

server.listen(3100, ()=>{
    console.log("Server is running at port 3100: ");
})


