/*
Instructions:
	1. Login to your canvas, then redirect the webpage to UT Instapoll of the class.
	2. Copy the snippet below
	3. Then just paste it inside a Chrome or Firefox developer console to run
	4. If you see the console print ("Looking for incomplete polls...") then the script is working

This script should invoke a weird BEEP noise whenever there is a new poll published
*/
function PollNotifer(){
	let a=new AudioContext()
	function beep(vol, freq, duration){
	  v=a.createOscillator()
	  u=a.createGain()
	  v.connect(u)
	  v.frequency.value=freq
	  v.type="square"
	  u.connect(a.destination)
	  u.gain.value=vol*0.01
	  v.start(a.currentTime)
	  v.stop(a.currentTime+duration*0.001)
	}
	let pollTableList = document.getElementsByClassName("table table-hover table-itemlist");
	if(pollTableList.length > 0)
	{

		let pollTable = pollTableList[0]; 
		let polls = pollTable.getElementsByTagName("tr");
		for(var i = 1; i < polls.length; ++i)
		{
			let columns = polls[i].getElementsByTagName("td");
			if(columns.length >= 3)
			{
				if(!columns[2].innerHTML.includes("Completed"))
				{
					beep(1000,100,100);
				}
			}
		}
		console.log("Looking for incomplete polls...");
	}
	setTimeout(function(){PollNotifer();},1000);
}

PollNotifer();