var didPush = false;
function cambiarColor(id) {
	if(didPush){
	  var cuadro = document.getElementById(id);
	  //var color = cuadro.style.backgroundColor;
	  cuadro.style.backgroundColor = "#000";
	  if(cuadro.id == "player1")
	  	document.getElementById("player2").innerHTML = "<br \><div id=\"normal\"><h1>Drink! (don't be a pussy)</h1></div>"
	  else document.getElementById("player1").innerHTML = "<br \><h1 id=\"reverse\">Drink! (don't be a pussy)</h1>"
	  }
	}
	
function startGame(id) {
	var boton = document.getElementById(id);
	boton.style.display = "none";
	PlaySound("sound1");
}

function PlaySound() {
  var snd = new Audio("beep.wav"); // buffers automatically when created
  didPush = true;
  var time = Math.floor((Math.random()*10)+1);
  setTimeout(function(){snd.play();},3000);
  }