var request = require('request');

function main(params) {
    var username = "your_jenkins_id",
    password = "your_jenkins_api_key",
    url = "http://"+username+":"+password+"@{your_jenkins_address}/api/json";
   
   return new Promise(function(resolve, reject) {
       request.get(url, function(error, response, body) {
           if (error) {
               reject({msg : error});
           }
           else {
               var jobs = JSON.parse(body).jobs;
               var names = "";
               for( var i=0; i < jobs.length; i++) {
                   names += (i+1) +"." + jobs[i].name + "   ";
               }
               resolve({"text" : names});
           }
       });
   });
}