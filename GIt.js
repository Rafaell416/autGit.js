var comm = 'git add -A; git commit -m';
var upload = 'git push -u origin master';
var ping = 'if netcat -z google.com 80; then echo "1"; else echo "0"; fi';
var shell = require('shelljs/global');
var prompt = require('prompt');


if (exec(ping) == 1) {
	console.log('You Got it');
    cloud();
} else {
	console.log('You do not Got it');
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

	prompt.get(['¿Quieres enviarlo a GitHub?, (S/N)'], function (err, result){
		if (err) {return onErr(err);}
	})

	prompt.get(['comentario'], function (err, result) {
	  if (err) { return onErr(err); }
	  exec(comm + result.comentario);
	  exec(upload);
	});
}


function onErr(err) {
  console.log(err);
  return 1;
}


