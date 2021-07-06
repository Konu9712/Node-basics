var fs = require('fs')

//Read a file
fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})

//Write file,(Change the name of the  before run, because it already exist)
fs.writeFile('writefile1.js','console.log("File created")', function(err){
    console.log("File created")
})


// We can create file in perfect order
fs.writeFileSync('writefile.js','console.log("Syncronise modification")',function(err){
    console.log("Sync modification")
})

//Write on existing file(It will replace the whole file)
fs.writeFile('writefile.js','console.log("The whole file content is replaced")',function(err){
    console.log("The data of existing file is replaced")
})

//Apend file
fs.appendFile('writefile.js','console.log("This data is apended")', function(err){
    console.log("THe data is been apended")
})

//Deleting file
fs.unlink('writefile1.js',function(err){
    console.log("The file is been deleted")
})


//DO NOT COMPILE EVERYTHING TOGETHER, 
//CREATION FILE AND DELETION OF FILE MAY CREATE ERROR