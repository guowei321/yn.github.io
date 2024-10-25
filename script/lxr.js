let h = document.querySelectorAll(".tab-nav a")
for(let i  = 0; i<h.length;i++){
	h[i].addEventListener("click",function(){
		document.querySelector(".tab-nav .active").classList.remove("active")
		this.classList.add("active")
	})
}
const sum = document.querySelectorAll(".C")
const hezi = sum[0];
const hezi1 = sum[1];
const hezi2 = sum[2];
const hezi3 = sum[3];
const hezi4 = sum[4];
hezi.addEventListener("click",function(){
	window.location.href="shouye.html"
})
hezi1.addEventListener("click",function(){
	window.location.href="xiaoxi.html"
})
 hezi2.addEventListener("click",function(){
 	window.location.href="yingyong.html"
 })
// hezi3.addEventListener("click",function(){
// 	window.location.href="lianxiren.html"
// })
hezi4.addEventListener("click",function(){
	window.location.href="wede.html"
})