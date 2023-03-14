/*Had to move here it was causing too much errors on pages that did not have a test clock - Joshua */
// Test Clock
setInterval(function() {
    let tht_text = document.getElementById("thtext").innerHTML;
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("Title-THT-time").innerHTML = tht_text + time;
  }, 1000);