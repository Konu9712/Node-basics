const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        res.end("My First node Server is Working");
    }
    else if(req.url == "/about"){
        res.end("About page");
    }
    else if(req.url == "/contact"){
        res.end("Contact Page");
    } else if(req.url == "/userapi"){
        fs.readFile("./userAPI/userapi.json","utf-8",(err,data)=>{
            console.log(data);
            res.end(data);

            const objData = JSON.parse(data);
           // res.end(objData.data.employee_age);     //for specific data element[Don't forget to comment other responses]
        });
       
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>Page does not exist</h1>");
    }

});

server.listen(8000,"localhost", ()=>{
    console.log("Connected to the Server");
})