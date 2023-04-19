function futureMore(){
	let pF2= document.getElementById("pF2");
	let futureLink = document.getElementById("futureLink");
	if (pF2.classList.contains("hidden")){
		pF2.classList.remove("hidden");
		futureLink.innerHTML="See Less...";
	}
	else{
		pF2.classList.add("hidden");
		futureLink.innerHTML="See More...";
	}
}
function meMore(){
	let pA2= document.getElementById("pA2");
	let meLink = document.getElementById("meLink");
	if (pA2.classList.contains("hidden")){
		pA2.classList.remove("hidden");
		meLink.innerHTML="See Less...";
	}
	else{
		pA2.classList.add("hidden");
		meLink.innerHTML="See More...";
	}
}

function showResults(){
	let ans1=document.getElementById("q1-sel").value;
	let ans2=document.getElementById("q2-sel").value;
	let ans3=document.getElementById("q3-sel").value;
	let ans4=document.getElementById("q4-sel").value;
	let q1RP=document.getElementById("q1-res");
	let q2RP=document.getElementById("q2-res");
	let q3RP=document.getElementById("q3-res");
	let q4RP=document.getElementById("q4-res");
	let points=parseInt(0);
	if (ans1=="script.js"){
		q1RP.innerHTML="Question 1 - Correct";
		points+=1
	}
	else if(ans1!="script.js"){
		q1RP.innerHTML="Question 1 - Incorrect";
	}
	if (ans2=="alert"){
		q2RP.innerHTML="Question 2 - Correct";
		points+=1
	}
	else if(ans2!="alert"){
		q2RP.innerHTML="Question 2 - Incorrect";
	}
	if (ans3=="Cascading Style Sheets"){
		q3RP.innerHTML="Question 3 - Correct";
		points+=1
	}
	else if(ans3!="Cascading Style Sheets"){
		q3RP.innerHTML="Question 3 - Incorrect";
	}
	if (ans4=="yes"){
		q4RP.innerHTML="Question 4 - Correct";
		points+=1
	}
	else if(ans4!="yes"){
		q4RP.innerHTML="Question 4 - Incorrect";
	}
	
	let scoreP= document.getElementById("score");
	scoreP.innerHTML="Score: "+points+"/4";
}

setInterval(changeSlide,10000);
function changeSlide(){
	let pic1=document.getElementById("pic1");
	let pic2=document.getElementById("pic2");
	let pic3=document.getElementById("pic3");
	let pic4=document.getElementById("pic4");
	
	if(pic1.classList!="hidden"){
		pic1.classList.add("hidden");
		pic2.classList.remove("hidden");
	}
	else if (pic2.classList!="hidden"){
		pic2.classList.add("hidden");
		pic3.classList.remove("hidden");
	}
	else if (pic3.classList!="hidden"){
		pic3.classList.add("hidden");
		pic4.classList.remove("hidden");
	}
	else if (pic4.classList!="hidden"){
		pic4.classList.add("hidden");
		pic1.classList.remove("hidden");
	}
}
