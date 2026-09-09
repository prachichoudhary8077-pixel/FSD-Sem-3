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