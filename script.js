function report(){
	var number1 = Math.ceil(Math.random()*20);
	var number2 = Math.ceil(Math.random()*20);
	var number3 = Math.ceil(Math.random()*20);
	var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    document.getElementById("number1").innerHTML = number1;
	document.getElementById("number2").innerHTML = number2;
	document.getElementById("number3").innerHTML = number3;

	if(Math.max(number1,number2,number3)==number1&&number1!=number2&&number1!=number3){
		document.getElementById("results").innerHTML="Taken ("+number1+")";
	}
	else if(Math.max(number1,number2,number3)==number2&&number2!=number1&&number2!=number3){
		document.getElementById("results").innerHTML="Single ("+number2+")";
	}
	else if(Math.max(number1,number2,number3)==number3&&number3!=number1&&number3!=number2){
		document.getElementById("results").innerHTML="No Label ("+number3+")";
	}
	
	if (number1>0){
		var re = alphabet[number1];
		document.getElementById("ltr").innerHTML = re;
	}
	
	var mins = number2*number3;
	var hrs = parseInt((number2*number3)/60);
	var actmins = (mins)%60;
	document.getElementById("time").innerHTML= hrs +"hr "+ actmins +"min";
}
