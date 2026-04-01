function validateForm() {
let mobile = document.getElementById("mobile").value;

if (mobile.length !== 10) {
alert("Mobile must be 10 digits");
return false;
}
return true;
}
