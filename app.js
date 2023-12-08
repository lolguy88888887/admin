let time = document.querySelector(".time")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const restart = document.querySelector(".reset")
const lap = document.querySelector(".lap")
let second=0,minute=0,hour=0;
const timer = document.querySelector('.el');
function watch(){
	second++;
		let s = second<10 ? "0"+second : second;
let m = minute<10 ? "0"+minute : minute;
let h = hour<10 ? "0"+hour : hour;
time.innerText = h+":"+m+":"+s;
if(second==60){
	second=0;
	minute++;
	if(minute==60){
	minute=0;
	hour++;
	}
}
}
let ehleh;
start.addEventListener('click',()=>{
	ehleh = setInterval(watch,1000);
})

stop.addEventListener('click',()=>{
	clearInterval(ehleh)
})
restart.addEventListener('click',()=>{
	clearInterval(ehleh)
	hour=0;
	minute=0;
	second=0;
	time.innerText="00:00:00"
	lapEl.innerText = h+":"+m+":"+s;
})
lap.addEventListener('click',()=>{
	var lapEl = document.createElement('p');
	timer.append(lapEl);
})