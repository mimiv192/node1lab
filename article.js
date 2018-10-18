const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

const articlePath = path.join(__dirname, "./article.json");

rp('https://www.reddit.com/r/popular.json')
    .then(data => {
        let parsedData = JSON.parse(data);
        
        let articleArray = [];

        parsedData.data.children.forEach(article => {
            let obj = {
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            };
            articleArray.push(obj);
        });
        fs.writeFile(articlePath, JSON.stringify(articleArray, null, 2), (err) => {
            if (err) console.log(`Error:${err}`);
            console.log('no worries');
        })













    })
    .catch(err => console.log(`Whoops! Error ${err}`));
