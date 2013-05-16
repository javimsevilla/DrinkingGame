var didPush = false;
var beep = false;
var smbdPushed = false;
function cambiarColor(id) {
	if(didPush && beep && !smbdPushed){
	  smbdPushed = true;
	  var cuadro = document.getElementById(id);
	  //var color = cuadro.style.backgroundColor;
	  cuadro.style.backgroundColor = "#000";
	  if(cuadro.id == "player1")
	  	document.getElementById("player2").innerHTML = "<br \><div id=\"normal\"><h1>Drink! (don't be a pussy)</h1></div>"
	  else document.getElementById("player1").innerHTML = "<br \><h1 id=\"reverse\">Drink! (don't be a pussy)</h1>"
	  }
	  else location.reload();
	}
	
function startGame(id) {
	var boton = document.getElementById(id);
	boton.style.display = "none";
	PlaySound();
}

function PlaySound() {
  //var snd = new Audio("beep.wav"); // buffers automatically when created
  //didPush = true;
  //var time = Math.floor((Math.random()*10)+1);
  var time = Math.floor((Math.random()*9)+2);
  time = 1; //debug mode
  setTimeout(function(){beep();},time*1000);
}

  function beep() {
  	Android.beep();
  }