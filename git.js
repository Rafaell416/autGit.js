var co =  ' git add -A ; git commit -m "m" ';
var cog =  'git add -A ; git commit -m "m" ;git push -u origin master';
var comm = 'if netcat -z google.com 80; then echo "1"; else echo "0"; fi'
var exec = require('child_process').exec, child;
child = exec(comm,
  function (error, stdout, stderr) {
    //console.log(stdout);
if(stdout  =  "1" ){
var s = require('child_process').exec, child;
child = s(co,
  function (error, stdout, stderr) {
    //console.log(stdout);
    console.log("No se Pudo Enviar A repositorio Remoto");
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
    }else{      
var x = require('child_process').exec, child;
child = x(cog,
  function (error, stdout, stderr) {
    //console.log(stdout);
    console.log("Enviado A repositorrio Remoto");
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});     
    }
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});








    
/*

*/
