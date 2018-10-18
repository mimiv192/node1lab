const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

const articlePath = path.join(__dirname, "./popular-downloader.js");

rp('https://www.reddit.com/r/popular.json')
    .then(data => {
        // let parsedData = JSON.parse(data);
        
        let articleArray=[];
parsedData.data.children.forEach(article => {
    let obj = {
        
    }
}
fs.writeFile(articlePath, data, (err) => {
    if (err) console.log(`Err ${err}`);

    console.log('no worries');
})








    })
    .catch(e => console.log(`error ${e}`));