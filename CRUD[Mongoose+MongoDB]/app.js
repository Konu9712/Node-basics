// const mongoose = require("mongoose");

// <------------------------------------------CREATE / CONNECT TO DATABASE --------------------------->
// <------------------------------------------CREATE / CONNECT TO DATABASE --------------------------->
// <------------------------------------------CREATE / CONNECT TO DATABASE --------------------------->

// mongoose
//   .connect("mongodb://localhost:27017/crud2", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connection successful....."))
//   .catch((err) => console.log(err));


// <----------------------------------------------CREATE SCHEMA------------------------------>
// <----------------------------------------------CREATE SCHEMA------------------------------>
// <----------------------------------------------CREATE SCHEMA------------------------------>


// const firstsetSchema = new mongoose.Schema({
//     name: String,
//     job: String,
//     age: Number,
//     color: String,
//     DOB:{
//         type:Date,
//         default:Date.now
//     }
// })

// const Playlist = new mongoose.model("Firstset2",firstsetSchema);



// ==============================================================================================
// <------------------------------------------INSERT SINGLE ENTRY --------------------------->
// <------------------------------------------INSERT SINGLE ENTRY --------------------------->
// <------------------------------------------INSERT SINGLE ENTRY --------------------------->
// ==============================================================================================



// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/crud4" ,{ useUnifiedTopology: true ,useNewUrlParser: true })
// .then(()=>console.log("Connected"))
// .catch((err)=>console.log(err));

// const firstsetSchema = new mongoose.Schema({
//     name:String,
//     rollno:Number,
//     std:Number
// })

// const Collection = new mongoose.model("Firstset",firstsetSchema )
// const createDocument = async () =>{
//     try{
//         const yashData = new Collection({
//             name:"Yash",
//             rollno:23,
//             color:"purple"
//         })
//         const result = await yashData.save();
//         console.log(result);
//     }catch(err){
//     console.log(err);
//     }
// }
// createDocument();


// ===========================================================================================================
// <------------------------------------------INSERT MULTIPLE --------------------------->
// <------------------------------------------INSERT MULTIPLE --------------------------->
// <------------------------------------------INSERT MULTIPLE --------------------------->
// <------------------------------------------INSERT MULTIPLE --------------------------->
// ===========================================================================================================



const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud4", { useUnifiedTopology: true ,useNewUrlParser: true  })
.then(()=>console.log("Connected"))
.catch((err)=>console.log(err));

const fisrtSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    color:String,
})

const Collection = new mongoose.model("Firstset",fisrtSchema );
const allData = async () =>{

    const harkesh = new Collection({
        name:"Harkseh",
        age:24,
        color:"green"
    })
    const julie = new Collection({
        name:"Julie",
        age:26,
        color:"blue"
    })
    const yash = new Collection({
        name:"Yash",
        age:23,
        color:"red"
    })
    
    
    const result = await Collection.insertMany([harkesh,julie,yash]);
    console.log(result);
    
}


// allData();



//  =================================================================================
//  <-------------------------------READ--------------------------------------------->
//  <-------------------------------READ--------------------------------------------->
//  <-------------------------------READ--------------------------------------------->
//  =================================================================================


//READ ALL VALUES
//READ ALL VALUES

const getData = async ()=>{
        const result = await Collection.find();
        console.log(result);
}
// getData();

//READ SPECIFIC VALUE
//READ SPECIFIC VALUE


const specificDataset = async ()=>{
    const data = await Collection.find({color:"red"});
    console.log(data);
}

//specificDataset();

//READ SPECIFIC VALUE 
//READ SPECIFIC VALUE 

const specificValue = async ()=>{
    const result = await Collection.find({color:"red"}).select({name:1,age:1});
    console.log(result);
}

//specificValue();


// Greater then value
const comparisionValue = async ()=>{
    const result = await Collection.find({age:{$gt:23}})
    console.log(result);
}
//comparisionValue();



//Greater than equal to
const greaterEqual = async () =>{
const result = await Collection.find({age:{$gte:23}});
console.log(result);
}
//greaterEqual();


//Less than value
const lessThan = async ()=>{
    const result = await Collection.find({age:{$lte:23}});
    console.log(result);
}
//lessThan();


//Want multiple things (Multiple Query)

const multipleQuery = async ()=>{
    const resultm = await Collection.find({color: {$in: ["green",'blue']}});
    console.log(resultm);
}
//multipleQuery();

//Not In
const notIn = async ()=>{
    const result = await Collection.find({color: {$nin:['red','yellow']}});
    console.log(result);
}
//notIn();





// ====================================================================================
// <------------------------------------OPERATOR QUERRY ------------------------------>
// <------------------------------------OPERATOR QUERRY ------------------------------>
// <------------------------------------OPERATOR QUERRY ------------------------------>
// ====================================================================================


//OR operator

const orOperator = async ()=>{
    const result = await Collection.find({$or: [{color:"red"},{age:26}]});   //One of the condition should be true
    console.log(result);
}
//orOperator();

//AND operator
const andOperator = async ()=>{
    const result = await Collection.find({$and: [{age:26},{color:"blue"}]});
    console.log(result);
}
//andOperator();

//COUNT operator
const countOperator = async ()=>{
    const result = await Collection.find({age:{$gt:23}}).countDocuments()
    console.log(result);
}
//countOperator();

//SORTING
const sortingOpertor = async ()=>{
   const result =  await Collection.find({age:{$gt:22}}).sort({age:1});
    console.log(result);
}
//sortingOpertor();


// ====================================================================================
// <------------------------------- UPDATE ELEMENT------------------------------------>
// <------------------------------- UPDATE ELEMENT------------------------------------>
// <------------------------------- UPDATE ELEMENT------------------------------------>
// ====================================================================================

//UPDATE ONE VALUE
const update = async ()=>{
    const result = await Collection.updateOne({name:"Yash"},{$set:{color:"magenta"}});
    console.log(result);
}
//update();






// =======================================================================================
// <------------------------------------DELETE VALUE ------------------------------------>
// <------------------------------------DELETE VALUE ------------------------------------>
// <------------------------------------DELETE VALUE ------------------------------------>
// =======================================================================================

const deleteValue = async ()=>{
    const result = await Collection.deleteOne({name:"Yash"});
    console.log(result);
}
//deleteValue();
