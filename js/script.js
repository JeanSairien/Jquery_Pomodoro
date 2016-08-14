var temps = 1;
var minuter_min = temps; 
var minuter_sec;
var set;
var pause = 5;
/*var nb_sec_in_min = 60;*/


/*defined the name task*/
function setName(){
	var taskName = $("#task").val();
	/* throw an error if the task field is empty */
	if (taskName == ""){ alert("Erreur : rien n'est definit "); return false; }
	$("h2:first").text("Doing " + taskName);
	$("#task").val("");
}


$("#play").click(function() {
	setName();
	startTimer();

});

/* algo in js todo convert in jquery*/
/*timer*/

function timer(){
 $("p:first").text( temps +" : "+" 00");
 
};

function startTimer(){
	minuter_min = temps;
	minuter_sec = 00;
	set = setInterval(DeroulTimer,1000);
}

function afficheTime(){
	var t = minuter_min + ":" + minuter_sec;
	if(minuter_sec < 10)
		t = minuter_min + ":0" + minuter_sec;
	$("p:first").text(t);
}



function DeroulTimer(){
	afficheTime();
	if(minuter_sec == 00 && minuter_min != 00){
		minuter_sec = 59;
		minuter_min -= 1;   
	}
	else{
		minuter_sec = minuter_sec -1;
	}

	if(minuter_sec == 00 && minuter_min == 00){
		StopTimer();
		Pause();
};



function Pause(){
		var temps = pause;
		DeroulTimer();
	}


		


$("#stop").click(function() {
	StopTimer();
});
	
function StopTimer(){
		var temps = "00" + ":" + "00"; 
		$("p:first").text(temps);
		clearInterval(set);
		$("#task").text(task);
		$(".list-group-item:first").html("#task");
		

	};
		

}






	














