const fs  = require("fs");
const http = require("http");

const  server = http.createServer();
server.on("request",(req,res)=>{
    // const rstream = fs.createReadStream("content.txt");

    // rstream.on("data",(chunk)=>{
    //     res.write(chunk);
    // });
    // rstream.on("end",()=>{
    //     res.end();
    // });
    // rstream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("Fiel not found");
    // });

// ======================Another Easy Way (use pipe)============================
const pipestream = fs.createReadStream("pipe.txt");
pipestream.pipe(res);

});


server.listen(8000,"localhost");