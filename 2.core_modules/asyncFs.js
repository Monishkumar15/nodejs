const fs=require("fs");

//write File (Asynchronous)
fs.writeFile("asyncTest.txt","Hello Nodejs 2025 Async + Read File",(err)=>{
    if(err) throw err;
    console.log("File writtern completed")

    //Read File (Asynchronous)
    fs.readFile("asyncTest.txt",{encoding: "utf-8"},(err,data) =>{
        if(err) throw err;
        console.log("Read File Async: ", data);
    })
})
console.log("File writing processing")