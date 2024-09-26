var Info = {name : "Darryl", age : 10, grade : 9};
var myJSON = JSON.stringify(Info);
var newInfo = JSON.parse(myJSON);
document.getElementById("p1").innerHTML = newInfo.name