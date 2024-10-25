let bnt = document.getElementById("bnt")
bnt.addEventListener("click",function(){
setTimeout(function(){
	let quannbu = document.querySelector(".quanbu").classList.add("hidda")
	document.getElementById("imga").classList.add("hidde")
},3000)
setTimeout(function(){
	window.location.href="shouye.html"
},5000)
})