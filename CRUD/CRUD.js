var fs = require('fs')

//CREATE file
fs.writeFile('create1.js','consloe.log("Created textin created file")',function(err){
    console.log("file created")
})

//READ file
fs.readFile('create.js','utf8',function(err, data){
    console.log(data)
})

//UPDATE file

fs.appendFile('create.js','console.log("Updated text")', function(err){
    console.log("Data Updated")
})

//DELETE file

fs.unlink('create1.js',function(err){
    console.log("The file is been deleted")
})