// promises
const fs = require('fs').promises;
async function writeFile(){
    try{
        await fs.writeFile("promises.txt","Hello Student!");
        console.log("file created and data written successfully.");
    } catch (error){
        console.log("error: ",error);
    }
}
writeFile();

// read
async function readFile(){
    try{
        const data = await fs.readFile("promises.txt","utf8");
        console.log("file content");
        console.log(data);
    } catch(error){
        console.log("error: ",error);
    }
}
readFile();

// update 