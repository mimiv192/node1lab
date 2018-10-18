const path = require('path');
const fs = require('fs'); // import fs from 'fs';


let chirpPath = path.join(__dirname, "../chirps/chirps.json");

"C:/Users/InnovateBham_7/iambham-summer-2018/node1-lab/server/server.js"
"/chirps/chirps.json"

let chirpArray = [
    {
        author: "Paul",
        chirp: "Silly Love Songs",
    },
    {
        author: "Barry",
        chirp: "See the Show Again",
    },
    {
        author: "Anonymous",
        chirp: "Happy Birthday",
    },
    {
    author: "Barack Obama",
    chirp: "Hey Everybody",
    }
];

// fs.writeFile(chirpPath, JSON.stringify(chirpArray,null,2),(err) => {
//     if(err) console.log(`Somethin went down writing file: ${err}`);

//    console.log('It has been written!'); 
// });

fs.readFile(chirpPath, (err,data) => {
    if(err) console.log(`Error reading file: ${err}`);

    let chirps = JSON.parse(data);

    chirps.forEach(chirp => {
        console.log(`${chirp.author} chirp: ${chirp.chirp}`)
    });
});

