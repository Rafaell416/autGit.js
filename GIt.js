var comm = 'git add -A; git commit -m';  //Here we save the commit comand into a variable
var upload = 'git push -u origin master'; //Here we save the push comand into a variable
var ping = 'if netcat -z google.com 80; then echo "1"; else echo "0"; fi'; //This is the ping that verify the internet connection
var shell = require('shelljs/global'); //the shelljs module to write shellscriptinng with nodejs
var prompt = require('prompt'); //the prompt module to show data on terminal


// with this conditional we validate if theres a conection or not and show a message acording to the status

if (exec(ping) == 1) {
	console.log('You are online');
    cloud();
} else {
	console.log('You are offline');
	local();
}

function local () {
	prompt.start();

	prompt.get(['comentario'], function (err, result) {
	  if (err) { return onErr(err); }
	  exec(comm + result.comentario);
	});
}

function cloud () {
	prompt.start();
	local();
	var ask = '¿Quieres enviarlo a GitHub?, (S/N)';
	prompt.get([ask], function (err, result) {
	  if (err) { return onErr(err); }
	  if (result.ask == S || s) {
 		exec(upload);
	  }else {
        exit(1);
	  }
	});
}


// This is the function  that deal with errors 
//  Esta es la funcion que se encarga de manejar los errores
function onErr(err) {
  console.log(err); //Aqui le decimos que imprima el error en la consola
  return 1;
}


