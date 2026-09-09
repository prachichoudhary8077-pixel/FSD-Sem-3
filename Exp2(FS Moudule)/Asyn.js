const fs = require('fs');
fs.writeFile(
    'sample.txt','Welcome to full stack development',(err)=>{
        if(err){
            console.log('error creating file',err);
            return;
        }
        console.log('file created successfully!');
    }
)

// read
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error reading file',err);
        return;
    }
    console.log('file context: ');
    console.log(data);
} )

// append 
fs.appendFile('sample.txt','\nsemester: 3', (err)=> {
    if(err){
        console.log('error updating file',err);
    } else{
        console.log('\n3. file updating successfully!');
    }
})

// updated read
fs.readFile('sample.text','utf8', (err,data)=> {
    if(err){
        console.log('error updating file',err);
        return;
    } 
    console.log('file content: ');
    console.log(data);
})

// delete
fs.unlink('hi.txt',(err)=> {
    if(err){
        console.log('error deleting file: ',err);
    }
    else{
        console.log('\n4. file deleting successfully!');
    }
})

// // promises
// const fs = require('fs').promises;
// async function writeFile(){
//     try{
//         await fs.writeFile("promises.txt","Hello Student!");
//         console.log("file created and data written successfully.");
//     } catch (error){
//         console.log("error: ",error);
//     }
// }
// writeFile();

// 