const express = require('express');
const { Socket } = require ('socket.io')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { stat } = require('fs');
const { dirname } = require('path');
const path = require ('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.get('/',(req,res)=>{
    res.render('teste.html')
})

io.on('connection',socket=>{
   io.emit('local','conectado')
})

app.listen(3000);
try{
    console.log('Server up')
}catch(err){
    console.log("server error",err)
}
 