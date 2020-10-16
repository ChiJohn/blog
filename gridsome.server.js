// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');
module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    console.log('--------fetch data start')
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    //ex: import data from apis
    // const { data } = await axios.get('http://yw-test.cedarsv.com/ifs/script/sysdict.js');
    // console.log('apidata',data);
    // const collection = addCollection({typeName:'apiData'});
    // for(const item of data){
    //   collection.addNode({
    //     id:item.id,
    //     title: item.title
    //   })
    // };

    //ex: import data from json files
    console.log('--------import data form json files');

    const jsonData  = require('./src/data/blog.json');
    console.log('jsonData',jsonData);
    const collectionJson = addCollection({typeName: 'jsonData'});
    // collectionJson.addNode(collectionJson);
  console.log('collectionJson',collectionJson)

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
