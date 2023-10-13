function convertToCelsius() {  var temp = parseFloat(document.getElementById("fahrenheit").value);
if(!isNaN(temp)){
  var cc=(temp-32)*5/9;
  document.getElementById("resultFahrenheit").innerHTML= cc + "C"

}
else{
  document.getElementById("resultFahrenheit").innerHTML = "Please enter a valid number.";

}
   
  }
  
  function convertToFahrenheit() {
    var temp = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(temp)){
        var ft=(temp *9/5)+32;


    document.getElementById("resultCelsius").innerHTML = ft + "F";
  } else {
      
      document.getElementById("resultCelsius").innerHTML = "Please enter a valid number.";
  }
}
  
