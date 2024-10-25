// 使用 querySelectorAll 获取所有具有 'hezi' 类的 div 元素，这些元素位于类名为 'dibu' 的元素内部  
const sum = document.querySelectorAll(".C")
const hezi1 = sum[1];
const hezi2 = sum[2];
const hezi3 = sum[3];
const hezi4 = sum[4];
hezi1.addEventListener("click",function(){
	window.location.href="xiaoxi.html"
})
hezi2.addEventListener("click",function(){
	window.location.href="yingyong.html"
})
hezi3.addEventListener("click",function(){
	window.location.href="lianxiren.html"
})
hezi4.addEventListener("click",function(){
	window.location.href="wede.html"
})