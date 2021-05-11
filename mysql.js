const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
//const mysql = require('mysql');
const routes = require('../cadastrousuario/src/models/routes');


const app = express();
const port = process.env.PORT || 3000;

/*mysql.connect('mysql://localhost:3306/cadastrousuario', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('MySql conectado com sucesso!')
    }
})*/

app.use(cors());

app.use(cookieParser());

app.use(express.json());

 
app.use(routes);

app.listen(port, function(){
    console.log('Server runing on port ${port}')
})

