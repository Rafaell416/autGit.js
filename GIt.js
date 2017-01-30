var comm = 'git add -A; git commit -m';
var upload = 'git push -u origin master';
var ping = 'if netcat -z google.com 80; then echo "1"; else echo "0"; fi';
var shell = require('shelljs/global');
var prompt = require('prompt');


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
	var ask = '¿Quieres enviarlo a GitHub?, (S/N)';

	prompt.get(['comentario'], function (err, result){
		if (err) {return onErr(err);}
		exec(comm + result.comentario);
	})

	prompt.get([ask], function (err, result) {
	  if (err) { return onErr(err); }
	  if (result.ask == S || s) {
 		exec(upload);
	  }else {
        exit(1);
	  }
	});
}


function onErr(err) {
  console.log(err);
  return 1;
}


