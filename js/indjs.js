function Jombarticle1() {
    window.location.href = "mt.html";
   }
function Jombarticle2() {
    window.location.href = "smi.html";
   }
function Jombspecialtht() {
    window.location.href = "tht.html";
}
setInterval(function() {
    let tht_text = document.getElementById("thtext").innerHTML;
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("Title-THT-time").innerHTML = tht_text + time;
  }, 1000);