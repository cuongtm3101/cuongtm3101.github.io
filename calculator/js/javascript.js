var ham ="";
var kq;

function press(a){
	ham=ham+a;
	document.getElementById("nhap").innerText=ham;
	if (ham.length > 11) {
		alert("Quá giới hạn")
	}// in số lên thẻ b trống
}
function presskq(b){
	document.getElementById("nhap").innerText=eval(ham);
	ham=document.getElementById("nhap").innerText;
}//in kết quả ra
function pressAC(){
	ham='';
	document.getElementById("nhap").innerText=ham;
} 
function pressCan(){
	document.getElementById("nhap").innerText=eval(Math.sqrt(ham));
}
function pressBinh(){
	document.getElementById("nhap").innerText=eval(Math.pow(ham,2));
}