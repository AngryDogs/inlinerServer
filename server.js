
const express = require("express");
const myParser = require("body-parser");
const app = express();
const port = 2335;
const inlineCss = require('inline-css');
const options = {
     url: 'http://codereview.ee/',
     preserveMediaQueries: true,
     applyWidthAttributes: true,
     applyTableAttributes: true, 
  };

  app.use(myParser.urlencoded({extended : true}));
  app.post("", function(request, response) {
   const resHtml = request.body.html;
   console.log("heeellllo");
   inlineCss(resHtml, options)
       .then(function(html) { 
          response.send(html);
          response.end();
       }).catch(function(err){
          response.send("No file for you");
          response.end();
       });
   });

console.log('Listening on port ' + port);
app.listen(port);
