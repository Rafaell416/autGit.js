var comm = 'git add -A; git commit -m';
var upload = 'git push -u origin master';
var ping = 'if netcat -z google.com 80; then echo "1"; else echo "0"; fi';
var exec = require('child_process').exec, child;
var shell = require('shelljs/global');
var prompt = require('prompt');



 prompt.start();

  prompt.get(['comentario'], function (err, result) {
    if (err) { return onErr(err); }
    exec(comm + result.comentario);
    //console.log(' comentario: ' + result.comentario);
  });



  function onErr(err) {
    console.log(err);
    return 1;
  }