function calcular()
{
  console.log("funcao calcular");
  var v = document.getElementById("tensao").value;
  var c = document.getElementById("corrente").value;
  var pot = v*c;
  console.log("tensao="+tensao);
  console.log("corrente="+corrente);
  console.log("pot="+pot);
  document.getElementById("pot").innerHTML= "pot="+pot+"(w)";
}
