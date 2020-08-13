xhhtp1 = new XMLHttpRequest();
let i;
xhhtp1.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);
    document.getElementById("ptotal").innerHTML = data["ptotal"];
    document.getElementById("total").innerHTML = data["total"];
    document.getElementById("pnuevas").innerHTML = data["pnuevas"];
    document.getElementById("totalnuevas").innerHTML = data["totalnuevas"];
    document.getElementById("actualizadoA").innerHTML = "Actualizado a las 00:00 de " + data["fecha"];
    console.log(this.responseText);
  }
};

xhhtp1.open("GET", "requestMainInfo.php", true);
xhhtp1.send();