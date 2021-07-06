const os = require("os"); 
console.log(os.arch());    //64bit or 32bit 

const freeMemory = os.freemem();
console.log(freeMemory);

console.log(`${freeMemory/1024/1024/1024}`);  //RAM left in GB

const totalMemory = os.totalmem();
console.log(`${totalMemory /1024/1024/1024}`)  //Total RAM in GB

console.log(os.hostname());  // Host  name
console.log(os.platform());  //Platform
console.log(os.userInfo());  //User Info
console.log(os.type());      //Type of operating system

// For more such function check it out:- https://nodejs.org/api/os.html