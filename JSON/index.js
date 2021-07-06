const fs = require("fs");

const basicData ={
    name:"Ironman",
    age:35,
    job:"avengers"
};

//--------------convert to JSON--------------------------
const jsonData = JSON.stringify(basicData);
//console.log(jsonData);

//--------------convert to object data-------------------

const objData = JSON.parse(jsonData);
//console.log(objData);


////=========================File trasformation========================

// fs.writeFile('jsonfile.json',jsonData, (err)=>{
//  console.log("Created");
// })

fs.readFile("jsonFile.json","utf-8",(err, data)=>{
   console.log(data);
   const origData = JSON.parse(data);
   console.log(origData);
   console.log(origData.name);  // You can only access single element of data in object type data only
})