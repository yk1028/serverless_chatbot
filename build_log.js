var request = require('request');

function main(params) {
    var text = params.text.split(' ');
    var job = text[1];
    
    var username = "your_jenkins_id",
    password = "your_jenkins_api_key",
    url = "http://"+username+":"+password+"@{your_jenkins_address}/job/"+job+"/lastStableBuild/logText/progressiveText?start=0";
   
   return new Promise(function(resolve, reject) {
       request.get(url_log, function(error, response, body) {
           if (error) {
               reject({msg : error});
           }
           else {
               resolve({"text" : body});
           }
       });
   });
   
}