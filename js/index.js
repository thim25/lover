let count = 100;
let fS = 10;
document.getElementById("btnNo").onclick = function() {
  count += 20;
  fS += 10;
  document.getElementById("btnYes").style.width = count + "px";
  document.getElementById("btnYes").style.height = count + "px";
  document.getElementById("btnYes").style.fontSize = fS + "px";
};

document.getElementById("btnYes").onclick = function() {
  var video = document.getElementById("myVideo");
  video.style.display = "block";
  video.play();
  document.getElementById("myText").innerText = "I love you too❤️🫶";
  document.getElementById("myImage").style.display = "none";
  document.getElementById("btnYes").style.display = "none";
  document.getElementById("btnNo").style.display = "none";
};
