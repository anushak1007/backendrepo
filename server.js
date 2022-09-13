const Express= require('express'); // old way of importing express package(ES5 syntax) 
const Mongoose=require("mongoose")
const path =require("path");


const corsOptions ={

    exposedHeaders:"Authorization",

}
const server=Express();
const bodyparser=require('body-parser'); //used to parse any kind of data(text,json,html,xml....) from request body
const fs=require('fs'); // file system(fs) is a module which helps to read ,write files 
const port=5001;
 //const dburl="mongodb://localhost:27017/brilliodb"
//const dburl="mongodb://localhost:27017/storydb"
//mongo db from mongodb.com
const dburl = "mongodb+srv://dhanupandey:test12345@cluster0.s2usivc.mongodb.net/?retryWrites=true&w=majority"
const cors =require("cors")
//server.use()----it is a middleware which is called before every http request
//Express.static() is used to make build static which helps to access assests directly inside build 
server.use(cors(corsOptions))
server.use(Express.static(path.resolve(__dirname,"./build")))
server.use(bodyparser())
server.use('/user',require("./user"))
server.use('/story',require("./story"))

// get() will 2 things path and function handler
// FH will take 2 objs request and response object
//          server.get('/',function(req,res){
//         //res.send("Hello server");
//         res.sendFile(path.resolve(__dirname,"./build/index.html"));
//          })

//       server.post('/signup',function(req,res){
//       console.log(req.body)
//     fs.appendFile("user.txt",JSON.stringify(req.body),function(error){
//         console.log('error in writing file',error)
    
//         if(error){
//          res.status(500).send()
//         }
//         else{
//             res.send("done")
//         }
    
//     })
    
// });

// //reading file user.txt using fs
// fs.readFile("user.txt","utf8",function(error,data){
//     if(error){
//         console.log("cannot read file");

//     }else{
//         console.log("file read :",data);
//     }
// })

server.listen(port,()=>{
    Mongoose.connect(dburl,function(error,client){
        if(error){
            console.log("Error in connecting to database",error);

        }
        else{
            console.log("Connected to database");

        }
    })
    console.log("Server is listening");
});


 // new way of importing express package(ES6 syntax)
 //this can done in  2 ways ---->(1)with curly brace==gives back specific module which we ask for (2)without curly brace--gives back default module if it has ortherwise error
//import Express from "express"; 

//callback functions are function passed in function call

// mongo ---shell
//mongod -----server