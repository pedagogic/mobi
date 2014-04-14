// JavaScript Document
	/*storing data
	if(typeof(Storage)!=="undefined"){
	  // Code for localStorage/sessionStorage.
	  alert("We are good to fly!");
	 }else{
	  alert("this thing has no local storage");
	  // Sorry! No Web Storage support..
	}*/
	
var answer = 2;
var numOfOptions = 3;
var answered = false;

function pressDown(userSelection){
	if(!answered){
		document.getElementById("option"+userSelection).setAttribute("style","background:#999");
	}
}

	
function showMark(userSelection){
	if(!answered){
		
		//making all elements unhoverable
		for(var i=1; i<=numOfOptions;i++){
			document.getElementById("option"+i).setAttribute("style","background:#FC0");
		}
		
		//making correct answer green and wrong answer red
		if(userSelection == answer){
			document.getElementById("option"+userSelection).setAttribute("style","background:#9F0");
			document.getElementById("mark"+userSelection).setAttribute("style","background-position: 0px -24px;");
		}else{
			document.getElementById("option"+userSelection).setAttribute("style","background:#F33");
			document.getElementById("mark"+userSelection).setAttribute("style","background-position: 0px -48px;");
			
			document.getElementById("option"+answer).setAttribute("style","background:#9F0");
			document.getElementById("mark"+answer).setAttribute("style","background-position: 0px -24px;");
			
		}					
		answered = true;
	}
}