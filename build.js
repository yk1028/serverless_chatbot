var request = require('request');

function main(params) {
    var text = params.text.split(' ');
    var job = text[1];
    
    var username = "your_jenkins_id",
    password = "your_jenkins_api_key",
    url = "http://"+username+":"+password+"@{your_jenkins_address}/job/"+job+"/build?token={your_jenkins_job_access_token}";
   
   return new Promise(function(resolve, reject) {
       request.get(url, function(error, response, body) {
           if (error) {
               reject({msg : error});
           }
           else {
               resolve({"text": "building..."});
           }
       });
   });
}