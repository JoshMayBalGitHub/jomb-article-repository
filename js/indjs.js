/*//////////////////////////
 Can someone take a look at any other way
other than this, the repeating of 
window.location.href is making me go insane,
thanks! - Joshua
Still, nothing. - Joshua, 02-18-23
*//////////////////////////
function Jombarticle1() {
    window.location.href = "mt.html";
   }
function Jombarticle2() {
    window.location.href = "smi.html";
   }
function Jombspecialtht() {
    window.location.href = "tht.html";
}
function Jombspecialintrams1() {
    window.location.href="intram2023.html";
}
function Jombspecialintrams1() {
    window.location.href="Announcements.html";
}
// Test Clock
setInterval(function() {
    let tht_text = document.getElementById("thtext").innerHTML;
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("Title-THT-time").innerHTML = tht_text + time;
  }, 1000);