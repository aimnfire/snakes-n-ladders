const val =["pics/Alea_0.png", "pics/Alea_1.png", "pics/Alea_2.png", "pics/Alea_3.png", "pics/Alea_4.png", "pics/Alea_5.png", "pics/Alea_6.png"];

var elem = document.createElement("img");
elem.src = "pics/smiley.png";
elem.alt = "image of location";
elem.title = "smiley";
elem.id = "emoji";

var position = 0;

//document.getElementById(position.toString()).appendChild(elem);

var pending = false;

document.getElementById("message1").innerHTML = "ROLL A DIE!";
document.getElementById("message2").innerHTML = "...OR TWO DICE!!";

function roll() {
	console.log(pending);
	
		
	document.getElementById("rolldice").disabled = true; 
	document.getElementById("roll2dice").disabled = true;
	var a = Math.floor(Math.random()*6+1)
	document.getElementById("dice1").src = val[a];
	document.getElementById("message1").innerHTML = "YOU ROLLED  " + a +"!";
	document.getElementById("message2").innerHTML = "YOU MOVE  " + a +" PLACE(S)!";
	position += a;
	var move = position % 100;
	
	setTimeout(function(){document.getElementById(move.toString()).appendChild(elem);  
	if (move == 16 || move == 47 || move == 49 || move == 56 || move == 62 || move == 64 || move == 87 || move == 93 || move == 95 || move == 98 || move == 1 || move == 4 || move == 9 || move == 21 || move == 28 || move == 36 || move == 51 || move == 71 || move == 80){ 
		document.getElementById("message1").innerHTML = "WAIT!";
		document.getElementById("message1").style.color = "red"; 
		document.getElementById("message2").style.color = "red"; 
			if (move == 16){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 6!"; position = 6; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 47){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 26!"; position = 26; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 49){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 11!"; position = 11; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 56){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 53!"; position = 53; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 62){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 19!"; position = 19; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 64){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 60!"; position = 60; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 87){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 24!"; position = 24; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 93){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 73!"; position = 73; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 95){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 75!"; position = 75; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 98){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 78!"; position = 78; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 1){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 38!"; position = 38; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 4){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 14!"; position = 14; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 9){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 31!"; position = 31; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 21){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 42!"; position = 42; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 28){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 84!"; position = 84; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 36){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 44!"; position = 44; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 51){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 67!"; position = 67; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 71){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 91!"; position = 91; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 80){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 100!"; position = 100; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
	
	}
	else {if (move != 100) {document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;} else {document.getElementById("message1").style.color = "blue"; document.getElementById("message2").style.color = "blue"; document.getElementById("message1").innerHTML = "YOU JUST HIT 100!!!! YOU ARE A CHAMP!!!"; document.getElementById("message2").innerHTML = "TO PLAY AGAIN, REFRESH PAGE!!";} }
	
	}, 2000);
	
	return a;
	
	
	//console.log(document.getElementById("message1").innerHTML);
}

function roll2() {
	document.getElementById("rolldice").disabled = true;
	document.getElementById("roll2dice").disabled = true;
	var b = Math.floor(Math.random()*6+1)
	document.getElementById("dice2").src = val[b];
	var c = Math.floor(Math.random()*6+1)
	document.getElementById("dice3").src = val[c];
	var sum = b + c;
	document.getElementById("message1").innerHTML = "YOU ROLLED  " + b +  " & " + c+ "!";
	document.getElementById("message2").innerHTML = "YOU MOVE  " + sum +" PLACE(S)!";
	position += sum;
	var move = position %100;
	
	setTimeout(function(){document.getElementById(move.toString()).appendChild(elem);  
	if (move == 16 || move == 47 || move == 49 || move == 56 || move == 62 || move == 64 || move == 87 || move == 93 || move == 95 || move == 98 || move == 1 || move == 4 || move == 9 || move == 21 || move == 28 || move == 36 || move == 51 || move == 71 || move == 80){ 
		document.getElementById("message1").innerHTML = "WAIT!";
		document.getElementById("message1").style.color = "red"; 
		document.getElementById("message2").style.color = "red"; 
			if (move == 16){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 6!"; position = 6; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 47){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 26!"; position = 26; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 49){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 11!"; position = 11; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 56){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 53!"; position = 53; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 62){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 19!"; position = 19; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 64){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 60!"; position = 60; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 87){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 24!"; position = 24; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 93){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 73!"; position = 73; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 95){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 75!"; position = 75; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 98){document.getElementById("message2").innerHTML = "WOOPS! YOU LANDED ON SNAKE'S HEAD!  " + "YOU ARE GOING BACK DOWN TO 78!"; position = 78; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "TRY YOUR LUCK!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 1){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 38!"; position = 38; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 4){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 14!"; position = 14; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 9){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 31!"; position = 31; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 21){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 42!"; position = 42; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 28){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 84!"; position = 84; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 36){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 44!"; position = 44; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 51){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 67!"; position = 67; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 71){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 91!"; position = 91; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
			else if (move == 80){document.getElementById("message2").innerHTML = "NICE!! YOU LANDED AT THE BOTTOM OF A LADDER!  " + "YOU ARE MOVING UP TO 100!"; position = 100; setTimeout(function(){document.getElementById(position.toString()).appendChild(elem); document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;}, 5000); 
	}
	
	}
	else {if (move != 100) {document.getElementById("message1").style.color = "black"; document.getElementById("message2").style.color = "black"; document.getElementById("message1").innerHTML = "LET'S KEEP GOING!"; document.getElementById("message2").innerHTML = "ROLL AGAIN!"; document.getElementById("rolldice").disabled = false; document.getElementById("roll2dice").disabled = false;} else {document.getElementById("message1").style.color = "blue"; document.getElementById("message2").style.color = "blue"; document.getElementById("message1").innerHTML = "   YOU JUST HIT 100!!!    YOU ARE A CHAMP!!!"; document.getElementById("message2").innerHTML = "TO PLAY AGAIN, REFRESH PAGE!!";} }
	
	}, 2000);
	
	return b + c;
}



