var Express = require("express");
var app = Express();
var GitHubApi = require("github");
var github = new GitHubApi({
    debug: true,
    protocol: "https",
    host: "api.github.com", 
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects 
    timeout: 5000
});
var vault = require('avault').createVault(__dirname);

app.get('/',function(req, res){
    var temp = {"name": ""};

    var token_ ='';

    function callback(profileString) {
        var profile = JSON.parse(profileString);
        token_ = profile.token; 

        CallGitHub(token_, res);
    }
    
    vault.get('myVault', callback);
    
    // console.log(github.users.get({}), function(req, res_){
    //     console.log(res_);llback
    //     res.send(res_)
    // });

});

function CallGitHub(token_, res)
{
     github.authenticate({
     type: "oauth",
     token: token_
     });

     github.users.get({},function(err,res_){
     	res.send(res_.data.name);
     });

}


app.all('/:temp_name', function(req, res){
   res.send("Invalid request "); 
});

app.listen('1337');