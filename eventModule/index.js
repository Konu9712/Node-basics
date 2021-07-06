const EventEmitter = require("events");
const event = new EventEmitter();


// ======================For single click single output=====================
event.on("first", () => {
    console.log("Your name is Konu");
});

event.emit("first");


//====================For Single click Multiple output========================
event.on("name",()=>{
    console.log("First name is Konark")
});

event.on("name",()=>{
    console.log("Middle name is Ritesh")
});

event.on("name",()=>{
    console.log("Last name is Dave");
});

event.emit("name");

